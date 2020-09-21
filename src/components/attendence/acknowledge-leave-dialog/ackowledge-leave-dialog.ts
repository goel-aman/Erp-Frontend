import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LeaveRecord} from '../../../models/models';

@Component({
  selector: 'ackowledge-leave-dialog',
  templateUrl: './ackowledge-leave-dialog.html',
  styleUrls: ['./acknowledge-leave-dialog.css'],
})
export class AcknowledgeLeaveDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: LeaveRecord) {}
}
