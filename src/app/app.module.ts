import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AcedgeLayoutModule} from '../components/shared/acedge-layout/acedge-layout.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from '../components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarComponent} from '../components/toolbar/toolbar.component';
import {AttendanceModule} from '../components/attendence/attendance.module';
import {SidenavComponent} from '../components/sidenav/sidenav.component';
import {HomeComponent} from '../components/home/home.component';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {LoginModule} from '../components/login/login.module';
import {ChartsModule} from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AceEdgeService} from './core/services';

import {MatGridListModule} from '@angular/material/grid-list';
import {AdminAssignmentModule} from './admin-assignment/admin-assignment.module';
import {CommonModule} from '@angular/common';
import {AssignmentStudentModule} from './assignment-student/assignment-student.module';
import {LeaveModule} from '../components/leave/leave.module';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import {AcknowledgeLeaveDialog} from '../components/attendence/acknowledge-leave-dialog/ackowledge-leave-dialog';
import {ErrorPageComponent} from './error-page/error-page.component';

export const ACE_DATE_FORMATS = {
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    SidenavComponent,
    HomeComponent,
    ErrorPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AcedgeLayoutModule,
    BrowserAnimationsModule,
    AttendanceModule,
    LeaveModule,
    ChartsModule,
    HttpClientModule,
    MatMomentDateModule,
    MatNativeDateModule,
    FormsModule,
    LoginModule,
    ReactiveFormsModule,
    MatGridListModule,
    AdminAssignmentModule,
    AssignmentStudentModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-IN' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: ACE_DATE_FORMATS },
    AceEdgeService,],
  entryComponents: [AcknowledgeLeaveDialog],
  bootstrap: [AppComponent],
})
export class AppModule { }
