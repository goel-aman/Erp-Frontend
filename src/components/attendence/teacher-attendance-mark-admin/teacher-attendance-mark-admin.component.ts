import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TeacherAttendanceMarkTableComponent } from '../teacher-attendance-mark-table/teacher-attendance-mark-table.component';

@Component({
  selector: 'app-teacher-attendance-mark-admin',
  templateUrl: './teacher-attendance-mark-admin.component.html',
  styleUrls: ['./teacher-attendance-mark-admin.component.css','../../../mat-styles.css'],

})
export class TeacherAttendanceMarkAdminComponent implements OnInit {
  constructor() {}
  @ViewChild(TeacherAttendanceMarkTableComponent)
  attendanceTable: TeacherAttendanceMarkTableComponent;
  showTable = false;
  date: Date;
  enableTeacherName =false;
  formTeacherName:string;
  ngOnInit() {
    this.date = new Date();
    this.date.setHours(0, 0, 0, 0);
  }
  ngAfterInit() {}
  submit() {
    this.showTable=true;
    this.attendanceTable.date = this.date;
    this.attendanceTable.enableTeacherName =this.enableTeacherName;
    this.attendanceTable.formTeacherName = this.formTeacherName;
    this.attendanceTable.updateTable();
  }
}
