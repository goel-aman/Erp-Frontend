import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StudentAttendance, Student } from 'src/app/core/models';
import { AceEdgeService } from 'src/app/core/services';
import { DatePipe } from '@angular/common';
import { AttendanceService } from 'src/services/attendance.service';
import {
  StudentAttendanceReport,
  SchoolClass,
  AttendanceReportByName,
} from 'src/models/models';

@Component({
  selector: 'app-attendance-report-student',
  templateUrl: './attendance-report-student.component.html',
  styleUrls: [
    './attendance-report-student.component.css',
    '../../../mat-styles.css',
  ],
})
export class AttendanceReportStudentComponent implements OnInit {
  attendance: StudentAttendanceReport[];
  attendanceWithName: AttendanceReportByName[];
  currentStudent: StudentAttendanceReport[];

  attendanceMappings = new Map<string, (a: StudentAttendanceReport) => any>();
  attendanceWithNAmeMappings = new Map<
    string,
    (a: AttendanceReportByName) => any
  >();
  studentMappings = new Map<string, (a: StudentAttendanceReport) => any>();

  academicYears: number[];
  attendanceBelow: number;
  class: SchoolClass;
  fromDate: Date;
  toDate: Date;
  workingDays: number;
  enableStudentName: boolean;
  formStudentName: string;
  constructor(
    private aceEdgeService: AceEdgeService,
    private attendanceService: AttendanceService
  ) {}

  datePipe = new DatePipe('en-IN');
  ngOnInit() {
    this.attendance = null;
    this.setMappingsWithoutStudent();
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
    this.class = <SchoolClass>{
      section: 'C',
      standard: 4,
    };
    this.toDate = new Date();
    this.fromDate = new Date(this.toDate.getTime());
    this.fromDate.setMonth(this.toDate.getMonth() - 6);
    this.workingDays = 80;
    this.enableStudentName = false;
    this.formStudentName = 'Shrey Datta';
    this.currentStudent = null;
  }

  setMappingsWithoutStudent() {
    var mappings = new Map<string, (a: StudentAttendanceReport) => any>();
    mappings.set('Adm No.', (a) => a.admission_no);
    mappings.set('Name', (a) => a.student_fname + ' ' + a.student_lname);
    mappings.set('Guardians Name', (a) => a.father_name);
    mappings.set('Guardians Number', (a) => a.mobile);
    mappings.set('Present', (a) => a.present);
    mappings.set('Percentage', (a) => (a.present * 100) / a.working + '%');
    this.attendanceMappings = mappings;
  }
  setMappingsWithStudent() {
    var attendanceMappings = new Map<
      string,
      (a: AttendanceReportByName) => any
    >();
    attendanceMappings.set('Date', (a) =>
      this.datePipe.transform(a.attendance_date, 'mediumDate')
    );
    attendanceMappings.set('Attendance', (a) => a.status);
    this.attendanceWithNAmeMappings = attendanceMappings;

    var studentMappings = new Map<
      string,
      (s: StudentAttendanceReport) => any
    >();
    studentMappings.set('Admn No.', (s) => s.admission_no);
    studentMappings.set(
      'Student Name',
      (s) => s.student_fname + ' ' + s.student_lname
    );
    studentMappings.set('Guardians Name', (s) => s.father_name);
    studentMappings.set(
      'Class',
      (s) => this.class.standard + ' - ' + this.class.section
    );
    studentMappings.set(
      'Attendance(%)',
      (s) => (s.present * 100) / s.working / 100 + '%'
    );
    this.studentMappings = studentMappings;
  }
  submit() {
    if (this.enableStudentName) {
      this.attendanceService
        .getStudentAttendanceReport(
          this.fromDate,
          this.toDate,
          this.class.standard,
          this.class.section
        )
        .subscribe(
          (d) =>
            (this.currentStudent = d.filter(
              (s) => s.student_fname == this.formStudentName
            )),
          (err) => console.log(err)
        );

      this.attendanceService
        .getStudentAttendanceReportByName(
          this.fromDate,
          this.toDate,
          this.formStudentName
        )
        .subscribe((d) => (this.attendanceWithName = d));
      this.setMappingsWithStudent();
    } else {
      this.currentStudent = null;
      this.attendanceService
        .getStudentAttendanceReport(
          this.fromDate,
          this.toDate,
          this.class.standard,
          this.class.section
        )
        .subscribe(
          (d) => {
            this.attendance = d;
            if (this.attendanceBelow != null) {
              this.attendance = this.attendance.filter(
                (val) =>
                  this.attendanceBelow > (val.present * 100) / val.working
              );
            }
          },
          (err) => console.log(err)
        );

      this.setMappingsWithoutStudent();
    }
  }
}
