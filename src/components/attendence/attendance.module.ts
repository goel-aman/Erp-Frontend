import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AttendanceComponent} from './attendance.component';
import {PieAttendanceComponent} from './pie-attendance/pie-attendance.component';
import {CalenderAttendanceComponent} from './calender-attendance/calender-attendance.component';
import {ClassAttendanceComponent} from './class-attendance/class-attendance.component';
import {AcedgeLayoutModule} from '../shared/acedge-layout/acedge-layout.module';
import {LeaveRecordModule} from './leave-record/leave_record.module';
import {ChartsModule} from 'ng2-charts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { AttendanceReportTeacherComponent } from './attendance-report-teacher/attendance-report-teacher.component';
import { AttendanceReportStudentComponent } from './attendance-report-student/attendance-report-student.component';
import { AceTableComponent } from './ace-table/ace-table.component';
import { MatTableModule } from '@angular/material/table';
import { StudentWithLowAttendanceComponent } from './student-with-low-attendance/student-with-low-attendance.component';
import { CheckStudentAttendanceComponent } from './check-student-attendance/check-student-attendance.component';
import {ManageLeavesModule} from './manage-leaves/manage-leaves.module';
import { StudentAttendanceMarkTableComponent } from './student-attendance-mark-table/student-attendance-mark-table.component';
import { StudentAttendanceMarkAdminComponent } from './student-attendance-mark-admin/student-attendance-mark-admin.component';
import { StudentAttendanceMarkTeacherComponent } from './student-attendance-mark-teacher/student-attendance-mark-teacher.component';
import { TeacherAttendanceMarkAdminComponent } from './teacher-attendance-mark-admin/teacher-attendance-mark-admin.component';
import { TeacherAttendanceMarkTableComponent } from './teacher-attendance-mark-table/teacher-attendance-mark-table.component';
import { AdminStudentTodayAbsenteesComponent } from './admin-student-today-absentees/admin-student-today-absentees.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { AdminStudentAttendanceDashboardComponent } from './admin-student-attendance-dashboard/admin-student-attendance-dashboard.component';
import { AdminTeacherDashboardComponent } from './admin-teacher-dashboard/admin-teacher-dashboard.component';
import { TeacherAttendanceComponent } from './teacher-attendance/teacher-attendance.component';
import { LeaveModule } from '../leave/leave.module';
// import { LeaveApplicationStatusComponent } from '../leave/leave-application-status/leave-application-status.component';

@NgModule({
  declarations: [
    AttendanceComponent,
    CalenderAttendanceComponent,
    ClassAttendanceComponent,
    PieAttendanceComponent,
    StudentAttendanceMarkTableComponent,
    StudentAttendanceMarkAdminComponent,
    StudentAttendanceMarkTeacherComponent,
    AttendanceReportTeacherComponent,
    AttendanceReportStudentComponent,
    AceTableComponent,
    StudentWithLowAttendanceComponent,
    CheckStudentAttendanceComponent,
    TeacherAttendanceMarkAdminComponent,
    TeacherAttendanceMarkTableComponent,
    AdminStudentTodayAbsenteesComponent,
    AdminStudentAttendanceDashboardComponent,
    AdminTeacherDashboardComponent,
    TeacherAttendanceComponent,

    // LeaveApplicationStatusComponent,
  ],
  imports: [
    AcedgeLayoutModule,
    BrowserModule,
    ChartsModule,
    FormsModule,
    LeaveRecordModule,
    MatMomentDateModule,
    ManageLeavesModule,
    ReactiveFormsModule,
    MatTableModule,
    MatRadioModule,
    MatButtonModule,
    LeaveModule,
  ],
  exports:  [
    AttendanceComponent,
    CalenderAttendanceComponent,
    ClassAttendanceComponent,
    PieAttendanceComponent,
    StudentAttendanceMarkTableComponent,
    StudentAttendanceMarkAdminComponent,
    StudentAttendanceMarkTeacherComponent,
    AttendanceReportTeacherComponent,
    AttendanceReportStudentComponent,
    AceTableComponent,
    TeacherAttendanceMarkAdminComponent,
    TeacherAttendanceMarkTableComponent,
    TeacherAttendanceComponent,
  ],
})
export class AttendanceModule {}
