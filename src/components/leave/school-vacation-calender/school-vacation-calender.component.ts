import { Component, OnInit } from '@angular/core';
import { SchoolVacationTable } from '../../../models/models';

@Component({
  selector: 'app-school-vacation-calender',
  templateUrl: './school-vacation-calender.component.html',
  styleUrls: ['./school-vacation-calender.component.css']
})
export class SchoolVacationCalenderComponent implements OnInit {
  displayedColumns = ['sno', 'date', 'day', 'leaveType'];
  dataSource = schoolVacationTable;

  constructor() { }

  ngOnInit(): void {
  }



}

const schoolVacationTable: SchoolVacationTable[] = [
  {sno: 1, date: 'Jan 1,2020', day: 'Wednesday', leaveType: 'New year\'s day'},
  {sno: 2, date: 'May 7,2020-July 1,2020', day: '-', leaveType: 'Summer vacation'},
  {sno: 3, date: 'Jan 1,2020', day: 'Wednesday', leaveType: 'New year\'s day'},
  {sno: 4, date: 'May 7,2020-July 1,2020', day: '-', leaveType: 'Summer vacation'},
  {sno: 5, date: 'Jan 1,2020', day: 'Wednesday', leaveType: 'New year\'s day'},
  {sno: 6, date: 'Jan 1,2020', day: 'Wednesday', leaveType: 'New year\'s day'},
  {sno: 7, date: 'Jan 1,2020', day: 'Wednesday', leaveType: 'New year\'s day'},
  {sno: 8, date: 'Jan 1,2020', day: 'Wednesday', leaveType: 'New year\'s day'},
  {sno: 9, date: 'Jan 1,2020', day: 'Wednesday', leaveType: 'New year\'s day'},
  {sno: 10, date: 'Jan 1,2020', day: 'Wednesday', leaveType: 'New year\'s day'}
];
