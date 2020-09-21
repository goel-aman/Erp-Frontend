
import { AttendanceStatus } from './attendance-status';
import { Teacher } from './teacher';

export interface TeacherAttendance {
  teacher:Teacher;
  date:Date;
  attendanceStatus:AttendanceStatus;
  approvalStatus:string;
  remarks: string;
}
