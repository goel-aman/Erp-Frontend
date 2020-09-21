import { Component, OnInit, Input } from '@angular/core';
import { AceEdgeService } from 'src/app/core/services';
import { Observable, BehaviorSubject, Subject, from } from 'rxjs';
import { AttendanceService } from 'src/services/attendance.service';
import { SchoolClass, StudentMarkAttendance } from 'src/models/models';
import { UserService } from 'src/services/user.service';

export type AttendanceDisplayMode = 'teacher' | 'admin';

@Component({
  selector: 'app-student-attendance-mark-table',
  templateUrl: './student-attendance-mark-table.component.html',
  styleUrls: ['./student-attendance-mark-table.component.css'],
})
export class StudentAttendanceMarkTableComponent implements OnInit {
  attendances: StudentMarkAttendance[];
  displayedColumns = [];
  admindisplayedColumns = [
    'SrNo',
    'AdmnNo',
    'Name',
    'GrdName',
    'GrdNumber',
    'AttStatus',
    'Remarks',
  ];
  teacherdisplayedColums = [
    'RollNo',
    'Name',
    'GrdName',
    'AttStatus',
    'Remarks',
  ];

  //#region displaymode property
  private _displayMode = new BehaviorSubject<AttendanceDisplayMode>(null);
  @Input()
  set displayMode(value) {
    this._displayMode.next(value);
  }

  get displayMode() {
    return this._displayMode.getValue();
  }
  //#endregion
  @Input()
  class: SchoolClass;
  @Input()
  date: Date;

  constructor(
    private attendanceService: AttendanceService,
    private userService: UserService
  ) {}

  ngOnInit() {
    if (this.date != null && this.class != null) {
      this.updateTable();
    }
    this._displayMode.subscribe((mode) => {
      switch (mode) {
        case 'admin':
          this.displayedColumns = this.admindisplayedColumns;
          break;
        case 'teacher':
          this.displayedColumns = this.teacherdisplayedColums;
          break;
        default:
          this.displayedColumns = [];
      }
    });
  }
  public updateTable() {
    this.attendanceService
      .getStudentMarkAttendance(
        this.class.standard,
        this.class.section,
        this.date
      )
      .subscribe(
        (d) => (this.attendances = d.attendance),
        (err) => console.log(err)
      );
  }
  updateAttendance() {
    this.attendanceService
      .postStudentMarkAttendance(this.attendances, this.date)
      .subscribe(
        () => this.updateTable(),
        (err) => console.log(err)
      );
  }
  toggleAttendance(attendance: StudentMarkAttendance) {
    switch (attendance.status) {
      case 'P':
        attendance.status = 'L';
        break;
      case 'L':
        attendance.status = 'A';
        break;
      case 'A':
        attendance.status = 'P';
        break;
      default:
        attendance.status = 'P';
    }
  }
}
