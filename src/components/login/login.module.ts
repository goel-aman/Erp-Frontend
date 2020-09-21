import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {AcedgeLayoutModule} from '../shared/acedge-layout/acedge-layout.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AcedgeLayoutModule,
    ReactiveFormsModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
