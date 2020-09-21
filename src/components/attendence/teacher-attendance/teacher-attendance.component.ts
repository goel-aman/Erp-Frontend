import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttendanceMode } from 'src/app/core/models/attendance-mode';

@Component({
  selector: 'app-teacher-attendance',
  templateUrl: './teacher-attendance.component.html',
  styleUrls: ['./teacher-attendance.component.css']
})
export class TeacherAttendanceComponent implements OnInit {
  //teacherId!: number;
  //studentId : number =1 ;//to be removed
  //user: User = this.userService.currentUser;
  //role = this.user.role;

  constructor(private readonly _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((data) => {
      //this.teacherId = data['id'];
    });
    this._activatedRoute.data.subscribe((d) => {
      if (d.displayMode != null) {
        this.displayMode = d.displayMode;
        console.dir(this.displayMode);
      }
    });
    // if (this.teacherId == null) {
    //   this.teacherId = 1;
    // }
  }
   displayMode = AttendanceMode.Student;
  get isDisplayStudent() {
    return this.displayMode == AttendanceMode.Student;
  }
  set isDisplayStudent(value) {}

}
