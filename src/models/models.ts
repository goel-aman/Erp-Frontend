export interface AcedgeTableConfig {
  readonly columns: ReadonlyMap<string, string>;
  readonly dateColumns?: ReadonlyArray<string>;
  readonly defaultSortColumn?: string;
  readonly entityName: string;
  readonly expandableColumns?: ReadonlyMap<string, string>;
  readonly filters?: ReadonlyArray<string>;
  readonly links?: string[];
  readonly sortDirection?: string;
}

export declare interface LeaveRecord {
  attendance_date: string;
  parent_acknowledged: string;
  status: string;
  leave_type?: string;
  leaveAcknowledgementStatus?: string;
  parent_remarks?: string;
}

export declare interface LeaveRecords {
  leave_records: LeaveRecord[];
}

export declare interface LeaveRecordTeacherLogin {
  student_name: string;
  status: string;
  parent_notified: string;
  parent_acknowledged: string;
}

export declare interface LeaveRecordsTeacherLogin {
  leave_records: LeaveRecordTeacherLogin[]
}
export interface LeaveApplicationRequest {
  attachment?: string; // file path on cloud storage.
  appliedOn: string;
  dateRange: string;
  noOfDays: number;
  leaveReason?: string;
}

export interface StudentLeaveApplicationRequest
  extends LeaveApplicationRequest {
  admNo: number;
  studentName: string;
  class: string;
}

export interface TeacherLeaveApplicationRequest
  extends LeaveApplicationRequest {
  empId: string;
  teacherName: string;
  leaveType: string;
}

export interface AcedgeLeaveApprovalRequest extends LeaveApplicationRequest {
  admNo?: number;
  studentName?: string;
  class?: string;
  empId?: string,
  teacherName?: string,
  leaveType?: string
}

// Fills up the dounut chart.
export declare interface StudentMonthAttendancePercentage {
  absent_percent: string;
  attendance_percent: string;
  late_percent: string;
  month_name: string;
}

export interface StudentAttendancePercentage {
  attendance: StudentMonthAttendancePercentage[];
}

// Fills up the line chart.
export declare interface ClassAttendanceStats {
  class_attendance: AttendanceStats;
}

export declare interface AttendanceStats {
  average_attendance: MonthlyAttendanceStats[],
  highest_attendance: MonthlyAttendanceStats[],
  student_attendance: MonthlyAttendanceStats[],
  lowest_attendance: MonthlyAttendanceStats[],
}

export declare interface MonthlyAttendanceStats {
  attendance_percent: string;
  month_name: string;
}

export interface AttendanceStatusForCalendar {
  calendar: AttendanceStatus;
}

export declare interface AttendanceStatus {
  absent_days: string[];
  late_days: string[];
  holidays: string[];
}

export interface ApplicationStatusCard {
  applicationAcknowledgementStatus?: string;
  status: string;
  start_date: string;
  end_date: string;
  no_of_days: number;
  type_of_leave: string;
}

export declare interface User {
  username: string,
  name: string,
  role: string, // Make it enum
  student_id?: number,
  standard?: string,
  section?: string;
  is_class_teacher?: boolean;
  user_id?: number;
  emp_id?: number;
  teacher_id?: number;
}
  
export declare interface CheckStudentAttendanceTable {
  leaves: string;
  attendance_date: string;
  acknowledged: string;
  percent: number;
}

export interface SchoolVacationTable {
  sno: number;
  date: string;
  day: string;
  leaveType: string;
}

export interface TeacherAttendanceReport {
  emp_id: number;
  mobile: number;
  name: string;
  present: number;
  working: number;
}
export interface AttendanceReportByName {
  attendance_date: Date;
  status: string;
}
export interface StudentAttendanceReport {
  admission_no: number;
  father_name: string;
  mobile: number;
  present: number;
  student_fname: string;
  student_lname: string;
  student_mname: string;
  working: number;
}
export interface TeacherMarkAttendance {
  approval_status?: string;
  attendance_status?: string;
  emp_id: string;
  mobile: number;
  name: string;
  remarks?: string;
}
export interface TeacherAttedanceUploadRecord {
  name: string;
  status: string;
  remarks: string;
}
export interface TeacherAttendanceUpload {
  attendance: TeacherAttedanceUploadRecord[];
  date: string;
  updated_by: number;
}

export interface SchoolClass {
  standard?: number;
  section?: string;
}
export interface StudentMarkAttendance {
  name: string;
  roll_no: number;
  status: string;
  remarks:string;
}
export interface StudentMarkAttendanceRecords {
 attendance:StudentMarkAttendance[];
 date:string;
}
export interface StudentAttedanceUploadRecord {
  name: string;
  roll_no:number;
  status: string;
  remarks: string;
}

export interface StudentAttendanceUpload {
  attendance: StudentAttedanceUploadRecord[];
  date: string;
  updated_by: number;
}

export interface AttendancePieChart {
  Absent: number,
  Late: number,
  Present: number
}

export interface TodaysAbsentees {
  class_name: string,
  parent_acknowledged: string,
  parent_notified: string,
  roll_no: number,
  status: string,
  student_name: string
}

export interface StudentLowAttendance {
  class_name: string,
  percent: number,
  student_name: string,
  unacknowledged: string

}

export interface StudentAttendanceByName {
  acknowledged: string,
  attendance_date: string,
  percent: number,
  status: string,
  student_name: string
}


export interface TeacherTodaysAbsentees {
  approval_status: string,
  attendance_status: string,
  emp_id: number,
  mobile: number,
  name: string,
  remarks: string
}

export interface AbsenteesRecord {
  teacher_name: string,
  attendance_status: string,
  approval_status: string
}


export interface TodayAbsentees {
  class_name: string,
  parent_acknowledged: string,
  parent_notified: string,
  roll_no: number,
  status: string,
  student_name: string
}

export declare interface LeaveHistory {
  attendance_date: string;
  type_of_leave: string;
}

export declare interface LeaveCategory {
  count: number;
  type_of_leave: string;
  total_leaves: number;
  percentage: number;
  color: string;
}

export declare interface PieChartTeacherLogin {
  average_class_absent: string,
  average_class_late: string,
  average_class_present: string
}

export declare interface StudentsWithLowAttendance {
  student_name: string;
  percent: number;
  unacknowledged: string;
  parent_mobile: number;
}


export interface subject {
  subject: string,
  teacherName: string,
  noOfAssignment: number,
  lateSubmission: number,
  averageMarks: number,
  status: string
}
