import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManageLeavesComponent} from './manage-leaves.component';
import {AcedgeLayoutModule} from '../../shared/acedge-layout/acedge-layout.module';

@NgModule({
  declarations: [
    ManageLeavesComponent,
  ],
  imports: [
    AcedgeLayoutModule,
    CommonModule,
  ],
  exports: [
    ManageLeavesComponent,
  ],
})
export class ManageLeavesModule {}
