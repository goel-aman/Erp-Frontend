import { AssignmentTableComponent } from './assignment-table/assignment-table.component';

import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { AssignmentComponent } from './assignment/assignment.component';
import { SubmissionsComponent } from './submissions/submissions.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSortModule } from '@angular/material/sort';
import { ViewAllAssignmentComponent } from './view-all-assignment/view-all-assignment.component';
import { SubmissionsViewComponent } from './submissions-view/submissions-view.component';
import { SubmissionViewTableComponent } from './submission-view-table/submission-view-table.component';
import { AssignmentReportComponent } from './assignment-report/assignment-report.component';
import { AttendanceModule } from 'src/components/attendence/attendance.module';
let exports = [
  AssignmentComponent,
  AssignmentTableComponent,
  SubmissionsComponent,
  ViewAllAssignmentComponent,
  SubmissionViewTableComponent,
  SubmissionsViewComponent,
  AssignmentReportComponent,
];
@NgModule({
  declarations: exports,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatTabsModule,
    RouterModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    FlexLayoutModule,
    AttendanceModule
  ],
  exports: exports,
})
export class AdminAssignmentModule {}
