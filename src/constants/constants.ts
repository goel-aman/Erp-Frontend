import {AcedgeTableConfig} from '../models/models';


const STUDENT_LEAVE_APPROVAL_COLS: ReadonlyMap<string, string> = new Map([
  ['admNo', 'Adm No'],
  ['studentName', 'Student name'],
  ['class', 'Class'],
  ['dateRange', 'Date range'],
  ['noOfDays', 'No of days'],
  ['attachment', 'Attachment'],
  ['action', 'Action'],
])

const LEAVE_APPROVAL_EXPANDABLE_COLS: ReadonlyMap<string, string> = new Map([
  ['appliedOn', 'Applied on'],
  ['reason', 'Reason'],
])

const TEACHER_LEAVE_APPROVAL_COLS: ReadonlyMap<string, string> = new Map([
  ['empId', 'Employee Id'],
  ['teacherName', 'Teacher name'],
  ['dateRange', 'Date range'],
  ['noOfDays', 'No of days'],
  ['leaveType', 'Leave Type'],
  ['attachment', 'Attachment'],
  ['action', 'Action'],
])

const StudentLeaveApprovalTableConfig: AcedgeTableConfig = {
  columns: STUDENT_LEAVE_APPROVAL_COLS,
  entityName: 'Leave Approval Request',
  expandableColumns: LEAVE_APPROVAL_EXPANDABLE_COLS,
}

const TeacherLeaveApprovalTableConfig: AcedgeTableConfig = {
  columns: TEACHER_LEAVE_APPROVAL_COLS,
  entityName: 'Leave Approval Request',
  expandableColumns: LEAVE_APPROVAL_EXPANDABLE_COLS,
}

export const ACEDGE_TABLE_CONFIG_MAP: ReadonlyMap<string, AcedgeTableConfig> = new Map([
  ['studentLeaveApproval', StudentLeaveApprovalTableConfig],
  ['teacherLeaveApproval', TeacherLeaveApprovalTableConfig]
])
