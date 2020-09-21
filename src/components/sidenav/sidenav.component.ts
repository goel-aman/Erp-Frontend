import { Component, OnInit,Input, ViewEncapsulation } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/models';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  valueFromHeader= true;
  user: User = this.userService.currentUser;
  studentId = this.user.student_id; // Need to get this from the user service.
  isAdmin = true;
  role = this.user.role;
  userId = this.user.user_id; //743 for user717
  empId = this.user.emp_id;
  teacherId = this.user.teacher_id;
  //trueValue: boolean = true;
  constructor(private readonly userService: UserService) {
  }
  
  ngOnInit() {
    console.log("studentId: ", this.studentId);
    console.log("role: ", this.role);
    console.log("is_class_teacher: ", this.user.is_class_teacher);
    console.log("name: ", this.user.name);
    console.log("section: ", this.user.section);
    console.log("standard: ", this.user.standard);
    console.log("username: ", this.user.username);
    console.log("user_id: ", this.userId);
    console.log("emp_id: ", this.empId);
    console.log("teacher_id: ", this.teacherId);
  }

}
