import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable({providedIn: 'root'})
export class UserLoginGuard implements CanActivate {
  constructor(private readonly userService: UserService, private readonly router: Router) { }

  canActivate() {
    if(this.userService.currentUser) {
      return true;
    }
    else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
