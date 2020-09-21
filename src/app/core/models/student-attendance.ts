import { Student } from './Student';
import { AttendanceStatus } from './attendance-status';

export interface StudentAttendance {
  student?:Student;
  date?:Date;
  attendanceStatus?:AttendanceStatus;
  remarks?: string;
  present?:number;
}
