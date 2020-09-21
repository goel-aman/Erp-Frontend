import { Component, OnInit, OnDestroy, Output,EventEmitter } from '@angular/core';
import {FormControl, FormGroup, FormBuilder,Validators,AbstractControl} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {ReplaySubject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup;
  afterLogin = false;
  @Output() valueToHeaderFromLogin: EventEmitter<any> = new EventEmitter();

  private readonly destroyed = new ReplaySubject<void>(1);

  constructor(private fb: FormBuilder, private route:Router,
              private readonly userService: UserService){
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public loginFormHasError = (controlName: string, errorName: string) =>{
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  onSubmit(){
    this.userService.login(this.loginForm.value['username'], this.loginForm.value['password'])
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => {
      this.route.navigate(["dashboard"]);
    })
  }

  ngOnDestroy() {
    this.destroyed.next();
  }

}
