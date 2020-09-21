import { AdminTeacherDashboardComponent } from './../components/attendence/admin-teacher-dashboard/admin-teacher-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceMode } from './core/models/attendance-mode';
import { AssignmentComponent } from './admin-assignment/assignment/assignment.component';
import { ViewAllAssignmentComponent } from './admin-assignment/view-all-assignment/view-all-assignment.component';
import { SubmissionsViewComponent } from './admin-assignment/submissions-view/submissions-view.component';
import { StudentAssignmentComponent } from './assignment-student/student-assignment/student-assignment.component';
import { SubjectSubmissionComponent } from './assignment-student/subject-submission/subject-submission.component';
import {LeaveComponent} from '../components/leave/leave.component';
import {SidenavComponent} from '../components/sidenav/sidenav.component';
import {AttendanceComponent} from '../components/attendence/attendance.component';
import {LoginComponent} from '../components/login/login.component';
import {AdminStudentTodayAbsenteesComponent } from 'src/components/attendence/admin-student-today-absentees/admin-student-today-absentees.component';
import {LeaveRecordComponent } from 'src/components/attendence/leave-record/leave_record.component';
import {AdminStudentAttendanceDashboardComponent} from 'src/components/attendence/admin-student-attendance-dashboard/admin-student-attendance-dashboard.component';
import {TeacherAttendanceComponent} from 'src/components/attendence/teacher-attendance/teacher-attendance.component';
import {ErrorPageComponent} from './error-page/error-page.component';

import {UserLoginGuard} from '../services/auth.guard';
import { SubjectsComponent } from './assignment-student/subjects/subjects.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: SidenavComponent,
    children: [
      {
        path: 'attendance/:id',
        component: AttendanceComponent,
      },
      {
        path: 'teacherattendance',
        component: TeacherAttendanceComponent,
      },
      {
        path: 'leave',
        component: LeaveComponent,
      },
      {
        path: 'leave-record',
        component: LeaveRecordComponent
      },
      {
        path: 'admin-student-attendance-dashboard-component' ,
        component: AdminStudentAttendanceDashboardComponent
      },
      {
        path: 'admin-teacher-attendance',
        component: AdminTeacherDashboardComponent
      },
      // Aman has Added
      {
        path: 'student-assignment-submitted',
        component: SubjectsComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: ErrorPageComponent, 
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
