import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SchoolClass } from 'src/models/models';

@Component({
  selector: 'app-student-attendance-mark-teacher',
  templateUrl: './student-attendance-mark-teacher.component.html',
  styleUrls: ['./student-attendance-mark-teacher.component.css','../../../mat-styles.css'],

})
export class StudentAttendanceMarkTeacherComponent implements OnInit {

  constructor() {
    this.date=new Date();
    this.date.setHours(0,0,0);
    this.class = <SchoolClass>{
      section:'A',
      standard:4
    };
  }

  date:Date;
  class:SchoolClass;
  ngOnInit() {
  }

}
