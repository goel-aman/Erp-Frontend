
export interface AssignmentSubjectReport {
  subject?:string,
  noOfAssignments?:number,
  active?:number,
  status?:assignmentStatus,
  pendingSubmissions?:number
}
export type assignmentStatus="Checked"|"UnChecked";
