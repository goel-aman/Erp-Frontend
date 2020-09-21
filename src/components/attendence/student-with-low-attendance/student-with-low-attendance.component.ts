import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/services/attendance.service';
import { UserService } from 'src/services/user.service';
import { User, StudentsWithLowAttendance } from '../../../models/models';

@Component({
  selector: 'app-student-with-low-attendance',
  templateUrl: './student-with-low-attendance.component.html',
  styleUrls: ['./student-with-low-attendance.component.css']
})
export class StudentWithLowAttendanceComponent implements OnInit {
  user: User;
  data;
  displayedColumns;
  dataSource;

  // dataSource: StudentsWithLowAttendance[] = [];
  // user: User = this.userService.currentUser;
  // role = this.user.role;
  teacherId = this.user.teacher_id;
  constructor(private _attendanceService: AttendanceService, private readonly userService: UserService) { }


  ngOnInit() {
    // this.user = this.userService.currentUser;
    this.user = {
      name: "admin_pandey",
      role: "Admin",
      user_id: 939,
      username: "admin"
    };

    if (this.user.role == 'teacher') {
      this.getStudentsWithLowAttendance(this.teacherId);
      this.displayedColumns = ['student_name', 'percent', 'unacknowledged', 'parent_mobile'];
      return;
    }

    this.displayedColumns = ['name', 'attendance', 'unacknowledgedLeave', 'class'];
    this._attendanceService.getStudentLowAttendance().subscribe((data) => {
      this.dataSource = data;
    });
  }


  getStudentsWithLowAttendance(teacherId: number) {
    this._attendanceService.getStudentsWithLowAttendance(teacherId)
      .subscribe((studentsWithLowAttendance: StudentsWithLowAttendance[]) => {
        this.dataSource = studentsWithLowAttendance;
      },
        (error) => {
          console.log(error);
        });
  }

}
