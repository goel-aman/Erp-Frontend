import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
// import {AcedgeLayoutModule} from '../../shared/acedge-layout/acedge-layout.module';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {AcknowledgeLeaveDialog} from './ackowledge-leave-dialog';


@NgModule({
  declarations: [AcknowledgeLeaveDialog],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    // AcedgeLayoutModule,
  ],
  exports: [AcknowledgeLeaveDialog],
})
export class AcknowledgeLeaveDialogModule {}
