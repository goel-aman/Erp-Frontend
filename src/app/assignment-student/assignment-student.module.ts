import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAssignmentComponent } from './student-assignment/student-assignment.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectSubmissionComponent } from './subject-submission/subject-submission.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { StudentCurrentAssignmentComponent } from './student-current-assignment/student-current-assignment.component';
import { AssignmentService } from 'src/services/assignment.service';


@NgModule({
  declarations: [
    StudentAssignmentComponent,
    SubjectsComponent,
    SubjectSubmissionComponent,
    StudentCurrentAssignmentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule
  ],
  providers: [
    AssignmentService,
  ],
  exports: [
    StudentAssignmentComponent,
    SubjectsComponent,
    SubjectSubmissionComponent,
    StudentCurrentAssignmentComponent
  ]
})
export class AssignmentStudentModule { }
