import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {AcedgeLayoutModule} from '../../shared/acedge-layout/acedge-layout.module';

import {AcknowledgeLeaveDialogModule} from '../acknowledge-leave-dialog/acknowledge-leave-dialog.module';

import {LeaveRecordComponent} from './leave_record.component';


@NgModule({
  declarations: [LeaveRecordComponent],
  imports: [
    AcedgeLayoutModule,
    AcknowledgeLeaveDialogModule,
    BrowserModule,
  ],
  exports: [LeaveRecordComponent],
})
export class LeaveRecordModule {}
