import {MatCalendar, MatCalendarCellCssClasses} from '@angular/material/datepicker';
import {Moment} from 'moment';
import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {ExampleHeader} from './example-header.component';
import {AttendanceService} from '../../../services/attendance.service';
import {AttendanceStatusForCalendar} from '../../../models/models';

@Component({
  selector: 'app-calender-attendance',
  templateUrl: './calender-attendance.component.html',
  styleUrls: ['./calender-attendance.component.css'],
})
export class CalenderAttendanceComponent implements OnInit {
  @Input() studentId!: number;
  exampleHeader = ExampleHeader;

  constructor(private readonly _attendanceService: AttendanceService) {}

  @ViewChild('calendar', {static: true}) calendar: MatCalendar<Moment>;
  absentDates: string[] = [];
  lateDates: string[] = [];
  holidayDates: string[] = [];

  ngOnInit() {
    this._attendanceService.getStudentAttendanceForCalendar(this.studentId)
      .subscribe((calendarAttendanceStatus: AttendanceStatusForCalendar) => {
        const attendanceStatus = calendarAttendanceStatus.calendar;
        this.absentDates = attendanceStatus.absent_days;
        this.lateDates = attendanceStatus.late_days;
        this.holidayDates = attendanceStatus.holidays;
      })

  }

  compareDates = (date: Date, todayDate: Date) => (
    date.getDate() === todayDate.getDate() &&
    date.getMonth() === todayDate.getMonth() &&
    date.getFullYear() === todayDate.getFullYear()
  )

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      var todaysDate = new Date(date);

      const highlightAbsents = this.absentDates
        .map((strDate) => new Date(strDate))
        .some((date) => this.compareDates(date, todaysDate));

      const highlightHolidays = this.holidayDates
        .map((strDate) => new Date(strDate))
        .some((date) => this.compareDates(date, todaysDate));

      const highlightLates = this.lateDates
        .map((strDate) => new Date(strDate))
        .some((date) => this.compareDates(date, todaysDate));

      return highlightAbsents
        ? 'absent-date'
        : highlightHolidays
        ? 'holiday-date'
        : highlightLates
        ? 'late-date'
        : '';
    };
  }
}
