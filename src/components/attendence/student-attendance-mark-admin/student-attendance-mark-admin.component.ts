import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { StudentAttendanceMarkTableComponent } from '../student-attendance-mark-table/student-attendance-mark-table.component';
import { SchoolClass } from 'src/models/models';

@Component({
  selector: 'app-student-attendance-mark-admin',
  templateUrl: './student-attendance-mark-admin.component.html',
  styleUrls: ['./student-attendance-mark-admin.component.css','../../../mat-styles.css'],

})
export class StudentAttendanceMarkAdminComponent implements OnInit {
  constructor() {}
  @ViewChild(StudentAttendanceMarkTableComponent)
  attendanceTable: StudentAttendanceMarkTableComponent;
  showTable = false;
  date: Date;
  class: SchoolClass;
  startAt: Date;
  endAt: Date;
  ngOnInit() {
    this.date = new Date();
    this.date.setHours(0, 0, 0, 0);
    this.class = <SchoolClass>{
      section: 'A',
      standard: 1,
    };
    this.startAt = new Date(this.date.getTime());
    this.startAt.setDate(this.date.getDate() - 5);
    this.endAt = new Date(this.date.getTime());
  }
  ngAfterInit() {}
  submit() {
    this.showTable=true;
    this.attendanceTable.date = this.date;
    this.attendanceTable.class = this.class;
    this.attendanceTable.updateTable();
  }
}
