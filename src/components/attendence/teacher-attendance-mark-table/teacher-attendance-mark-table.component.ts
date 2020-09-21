import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AttendanceService } from 'src/services/attendance.service';
import { SchoolClass, TeacherMarkAttendance } from 'src/models/models';
import { UserService } from 'src/services/user.service';

export type AttendanceDisplayMode = 'teacher' | 'admin';

@Component({
  selector: 'app-teacher-attendance-mark-table',
  templateUrl: './teacher-attendance-mark-table.component.html',
  styleUrls: ['./teacher-attendance-mark-table.component.css'],
})
export class TeacherAttendanceMarkTableComponent implements OnInit {
  attendances: TeacherMarkAttendance[];
  displayedColumns = [];
  admindisplayedColumns = [
    'SrNo',
    'Id',
    'Name',
    'ContactNumber',
    'AttStatus',
    'ApprovalStatus',
    'Remarks',
  ];
  enableTeacherName: boolean;
  formTeacherName: string;
  // teacherdisplayedColums = [
  //   'RollNo',
  //   'Name',
  //   'GrdName',
  //   'AttStatus',
  //   'Remarks',
  // ];

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

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit() {
    if (this.date != null && this.class != null) {
      this.updateTable();
    }
    this._displayMode.subscribe((mode) => {
      switch (mode) {
        case 'admin':
          this.displayedColumns = this.admindisplayedColumns;
          break;
        // case 'teacher':
        //   this.displayedColumns = this.teacherdisplayedColums;
        //   break;
        default:
          this.displayedColumns = [];
      }
    });
  }
  public updateTable() {
    this.attendanceService
      .getTeacherMarkAttendance(new Date())
      .subscribe((d) => (this.attendances = d));
  }
  updateAttendance() {

    this.attendanceService.postTeacherMarkAttendance(this.attendances,this.date)
    .subscribe(d=>this.updateTable(),(err)=>console.log(err));
  }
  toggleAttendance(attendance: TeacherMarkAttendance) {
    switch (attendance.attendance_status) {
      case 'P':
        attendance.attendance_status = 'L';
        break;
      case 'L':
        attendance.attendance_status = 'A';
        break;
      case 'A':
        attendance.attendance_status = 'P';
        break;
      default:
        attendance.attendance_status = 'P';
    }
  }
}
