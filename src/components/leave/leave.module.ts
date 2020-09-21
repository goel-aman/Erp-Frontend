import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcedgeLayoutModule } from '../shared/acedge-layout/acedge-layout.module';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { LeaveApplicationStatusComponent } from './leave-application-status/leave-application-status.component';
import { LeaveComponent } from './leave.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { LeaveRecordComponent } from './leave-record/leave-record.component';
import { SchoolVacationCalenderComponent } from './school-vacation-calender/school-vacation-calender.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressBarColor } from './leave-record/progress-bar-color';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LeaveComponent,
    LeaveApplicationComponent,
    LeaveApplicationStatusComponent,
    LeaveHistoryComponent,
    LeaveRecordComponent,
    SchoolVacationCalenderComponent,
    ProgressBarColor,
  ],
  imports: [
    AcedgeLayoutModule,
    BrowserModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [LeaveComponent, LeaveApplicationComponent],
})
export class LeaveModule { }
