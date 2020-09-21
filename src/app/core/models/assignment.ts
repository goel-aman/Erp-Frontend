import { Student } from './student';
import { assignmentStatus } from './assignment-subject-report';

export interface Assignment {
  student?: Student;
  from?: Date;
  to?: Date;
  status?: assignmentStatus;
  marks?: number;
  maxMarks?: number;
  percentage?: number;
}
// export interface Assignment1 {
//   student_name: string;
//   submitted_on: Date;
//   checked: assignmentStatus;
//   marks: number;
//   percentage: number;
//   total_marks: number;
// }

// export interface Assignment2 {
//   studentid: number;
//   checked: boolean;
//   marks: number;
//   percentage: number;
//   student_name: string;
//   submitted_on: Date;
//   total_marks: number;
// }
