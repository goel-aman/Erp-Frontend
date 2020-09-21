import { assignmentStatus } from './assignment-status';
import { Teacher } from './teacher';
import { SchoolClass } from 'src/models/models';

export interface AssignmentTopicReport {
  subject?:string,
  status?:assignmentStatus,
  pendingSubmissions?:number,
  topic?:string,
  from?:Date,
  to?:Date,
  class?:SchoolClass,
  assignedBy?:Teacher,
  type?:string,
  remarks?:string
}

