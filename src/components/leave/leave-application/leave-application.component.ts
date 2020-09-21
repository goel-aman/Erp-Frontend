import { AttendanceService } from './../../../services/attendance.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Location } from '@angular/common';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/models';
import { Subject } from 'rxjs';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class LeaveApplicationComponent implements OnInit {
  eventsSubject: Subject<void> = new Subject<void>();
  user: User = this.userService.currentUser;
  loginUserType: string = this.user.role;
  myFilter = (d: Date | null): boolean => {

    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    console.log(day);
    return day !== 0 && day !== 6;
  }
  date = new FormControl(moment());
  leaveApplicationForm: FormGroup;
  typeOfLeaves: string[] = ['Casual Leave', 'Medical leave', 'Flexi Leave'];

  leaveBalance: boolean = false;
  applyLeave: boolean = true;
  fromDate = new Date();
  toDate = new Date();

  days: any;
  todateSec: any;
  fromdateSec: any;
  millisecondsPerDay: any;
  diff: any;
  weeks: any;
  leaveDays = '';
  dateValidation: boolean = false;

  constructor(private fb: FormBuilder, private location: Location, private readonly userService: UserService, private attendanceService: AttendanceService) {
    if (this.userService.currentUser.role == 'Student' || this.userService.currentUser.role == "Guardian") {
      this.leaveApplicationForm = fb.group({
        name: this.userService.currentUser.name,
        class: this.userService.currentUser.standard,
        section: this.userService.currentUser.section,
        from: ['', Validators.required],
        to: ['', Validators.required],
        noOfDays: [this.leaveDays, Validators.required],
        typeOfLeave: ['', Validators.required],
        attachedDocument: '',
        reasonForLeave: ['', Validators.required],
      });
      return;
    }
  
    if (this.userService.currentUser.role == "Teacher") {
      this.leaveApplicationForm = fb.group({
        name: this.userService.currentUser.name,
        employeeId: "1234",
        from: ['', Validators.required],
        to: ['', Validators.required],
        noOfDays: [this.leaveDays, Validators.required],
        typeOfLeave: ['', Validators.required],
        attachedDocument: '',
        reasonForLeave: ['', Validators.required],
      });
    }
  }

  ngOnInit() {
    this.user = this.userService.currentUser;
  }

  // ValidateDate(control: AbstractControl): {[key: string]: any} | null  {
  //   this.getNumberOfLeaveDays();
  //   if(this.dateValidation == true){
  //     return { 'dateInvalid': true };
  //   }
  //   return null;
  // }

  public hasError = (controlName: string, errorName: string) => {
    return this.leaveApplicationForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    // console.warn(this.leaveApplicationForm.value);
    // console.log(this.leaveApplicationForm.value.to._d);
    let body = {
      start_date: this.leaveApplicationForm.value.from._i.year.toString() + "-" + this.leaveApplicationForm.value.from._i.month.toString() + "-" + this.leaveApplicationForm.value.from._i.date.toString(),
      end_date: this.leaveApplicationForm.value.to._i.year.toString() + "-" + this.leaveApplicationForm.value.to._i.month.toString() + "-" + this.leaveApplicationForm.value.to._i.date.toString(),
      type_of_leave: this.leaveApplicationForm.value.typeOfLeave,
      reason: this.leaveApplicationForm.value.reasonForLeave,
    }

    this.attendanceService.postApplicationStatus(body, Number(this.user.user_id)).subscribe(() => {
      this.eventsSubject.next();
    });
  }

  onCancel = () => { }

  onKeyUpfromdate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.fromDate = event.target.value;
    //console.log('from date', this.fromDate);
    this.getNumberOfLeaveDays();
  }

  onKeyUptoDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.toDate = event.target.value;
    //  console.log('to date', this.toDate);
    this.getNumberOfLeaveDays();
  }

  getNumberOfLeaveDays() {
    this.todateSec = new Date(this.toDate);
    this.fromdateSec = new Date(this.fromDate);

    if (this.todateSec < this.fromdateSec) {
      alert('To date must be greater that from date!');
      this.dateValidation = true;
    }

    // Calculate days between dates
    this.millisecondsPerDay = 86400 * 1000; // Day in milliseconds
    this.fromdateSec.setHours(0, 0, 0, 1); // Start just after midnight
    this.todateSec.setHours(23, 59, 59, 999); // End just before midnight
    this.diff = this.todateSec - this.fromdateSec; // Milliseconds between datetime objects 
    this.days = Math.ceil(this.diff / this.millisecondsPerDay);

    // Subtract two weekend days for every week in between
    this.weeks = Math.floor(this.days / 7);
    this.days = this.days - (this.weeks * 2);

    // Handle special cases
    this.fromdateSec = this.fromdateSec.getDay();
    this.todateSec = this.todateSec.getDay();

    // Remove weekend not previously removed. 
    if (this.fromdateSec - this.todateSec > 1)
      this.days = this.days - 2;

    // Remove start day if span starts on Sunday but ends before Saturday
    if (this.fromdateSec == 0 && this.todateSec != 6)
      this.days = this.days - 1;

    // Remove end day if span ends on Saturday but starts after Sunday
    if (this.todateSec === 6 && this.fromdateSec !== 0) {
      this.days = this.days - 1;
    }
    this.leaveDays = this.days;
    if (this.leaveDays === 'NaN' || this.leaveDays === '' || this.leaveDays <= '0' || this.leaveDays == 'undefined') {
      this.leaveDays = '';
    } else {
      this.leaveDays = this.days;
    }
    this.leaveApplicationForm.patchValue({ 'noOfDays': this.leaveDays });
  }
}
