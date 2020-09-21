import { Component, OnInit } from '@angular/core';
import { AceEdgeService } from 'src/app/core/services';
import { DatePipe } from '@angular/common';
import { AttendanceService } from 'src/services/attendance.service';
import {
  TeacherAttendanceReport,
  AttendanceReportByName,
  SchoolClass,
} from 'src/models/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-attendance-report-teacher',
  templateUrl: './attendance-report-teacher.component.html',
  styleUrls: [
    './attendance-report-teacher.component.css',
    '../../../mat-styles.css',
  ],
})
export class AttendanceReportTeacherComponent implements OnInit {
  datePipe = new DatePipe('en-IN');

  attendanceReportWithTeacher: AttendanceReportByName[];
  attendanceReportWithoutTeacher: TeacherAttendanceReport[];
  attendanceMappingsWithoutTeacher = new Map<
    string,
    (a: TeacherAttendanceReport) => any
  >();
  attendanceMappingsWithTeacher = new Map<
    string,
    (a: AttendanceReportByName) => any
  >();
  teacherMappings = new Map<string, (a: TeacherAttendanceReport) => any>();
  academicYears: number[];
  selectedYear: number;
  attendanceBelow: number;
  class: SchoolClass;
  fromDate: Date;
  toDate: Date;
  workingDays: number;
  enableTeacherName: boolean;
  formTeacherName: string;
  currentTeacher: TeacherAttendanceReport[];
  includeSrNo: boolean;
  constructor(
    private aceEdgeService: AceEdgeService,
    private attendanceService: AttendanceService
  ) {}

  ngOnInit() {
    // this.attendance = null;
    this.setMappingsWithoutTeacher();
    this.academicYears = [
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
    ];
    this.attendanceBelow = 50;
    this.class = <SchoolClass>{};
    // this.toDate = new Date();
    // this.fromDate = new Date(this.toDate.getTime());
    // this.fromDate.setMonth(this.toDate.getMonth() - 6);
    this.workingDays = 80;
    this.enableTeacherName = false;
    this.formTeacherName = 'teacher';
    this.currentTeacher = null;
  }

  setMappingsWithoutTeacher() {
    var mappings = new Map<string, (a: TeacherAttendanceReport) => any>();
    mappings.set('Id', (a) => a.emp_id);
    mappings.set('Name', (a) => a.name);
    mappings.set('Phone', (a) => a.mobile);
    mappings.set('Present', (a) => a.present);
    mappings.set('Percentage', (a) => (a.present * 100) / a.working + '%');
    this.attendanceMappingsWithoutTeacher = mappings;
  }
  setMappingsWithTeacher() {
    var attendanceMappings = new Map<
      string,
      (a: AttendanceReportByName) => any
    >();

    attendanceMappings.set('Date', (a) =>
      this.datePipe.transform(a.attendance_date, 'mediumDate')
    );
    attendanceMappings.set('Attendance', (a) =>
      this.attendanceService.getAttendanceStatusFullform(a.status)
    );

    this.attendanceMappingsWithTeacher = attendanceMappings;

    var teacherMappings = new Map<
      string,
      (s: TeacherAttendanceReport) => any
    >();

    teacherMappings.set('Id', (s) => s.emp_id);
    teacherMappings.set('Teacher Name', (s) => s.name);
    teacherMappings.set(
      'Attendance(%)',
      (s) => (s.present * 100) / s.working + '%'
    );

    this.teacherMappings = teacherMappings;
  }
  submit() {
    if (this.enableTeacherName) {
      this.attendanceService
        .getTeacherAttendanceReport(
          this.fromDate,
          this.toDate,
          this.selectedYear
        )
        .subscribe(
          (d) =>
            (this.currentTeacher = d.filter(
              (value) => value.name == this.formTeacherName
            )),
          (err) => console.log(err)
        );

      this.attendanceService
        .getTeacherAttendanceReportByName(
          this.formTeacherName,
          this.fromDate,
          this.toDate,
          this.selectedYear
        )
        .subscribe(
          (d) => (this.attendanceReportWithTeacher = d),
          (err) => console.log(err)
        );
      // this.currentTeacher = [attendance[0].teacher];
      this.setMappingsWithTeacher();
    } else {
      this.attendanceService
        .getTeacherAttendanceReport(
          this.fromDate,
          this.toDate,
          this.selectedYear
        )
        .subscribe(
          (d) => (this.attendanceReportWithoutTeacher = d),
          (err) => console.log(err)
        );
      // this.attendance = this.aceEdgeService.getTeacherAttendanceByDate(
      //   this.toDate
      // );

      this.currentTeacher = null;
      this.setMappingsWithoutTeacher();
      this.includeSrNo = true;
    }
  }
}
