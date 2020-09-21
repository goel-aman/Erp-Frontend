import {Component, Input} from '@angular/core';
// import {MATDATA}
import {animate, state, style, transition, trigger} from '@angular/animations';
import {StudentLeaveApplicationRequest, AcedgeLeaveApprovalRequest} from '../../../models/models';
import {ACEDGE_TABLE_CONFIG_MAP} from '../../../constants/constants';


const studentLeaveApplicationRequest: StudentLeaveApplicationRequest[] = [
  {
    admNo: 1,
    studentName: 'Shivam Kapoor',
    class: '4 - C',
    appliedOn: '1 May 2020',
    attachment: 'C:\\leaverequest.pdf',
    dateRange: 'May 2, 2020 - May 5, 2020',
    noOfDays: 3,
    leaveReason: 'Feeling ill.',
  },
  {
    admNo: 2,
    studentName: 'Datta Pawle',
    class: '4 - C',
    appliedOn: '1 May 2020',
    attachment: 'C:\\leaverequest.pdf',
    dateRange: 'May 2, 2020 - May 5, 2020',
    noOfDays: 3,
    leaveReason: 'Feeling ill.',
  },
];


@Component({
  selector: 'manage-leaves',
  templateUrl: './manage-leaves.component.html',
  styleUrls: ['./manage-leaves.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ManageLeavesComponent {
  @Input() leaveApprovalRequest = 'studentLeaveApproval';
  @Input() leaveApprovalData: AcedgeLeaveApprovalRequest[] = []
  data = studentLeaveApplicationRequest;
  columnsToDisplay = ['admNo', 'studentName', 'class', 'dateRange', 'noOfDays', 'attachment', 'action'];
  expandableColumns = ['appliedOn', 'leaveReason'];
  expandedElement: StudentLeaveApplicationRequest | null;

  isAttachmentLinkColumn(columnName: string) {
    console.log('Column namein attachment link: ' + columnName);
    return columnName === 'attachment'? true : false;
  }

  isActionsColumn(columnName: string) {
    return columnName === 'action'? true : false;
  }

  isExpandableDetailExists() {
    return true;
  }
}

