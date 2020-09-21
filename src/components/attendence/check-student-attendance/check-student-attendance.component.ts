import { Component, OnInit, Input } from '@angular/core';
import { CheckStudentAttendanceTable, StudentAttendanceByName } from '../../../models/models';
import { AttendanceService } from 'src/services/attendance.service';
import { UserService } from 'src/services/user.service';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-check-student-attendance',
  templateUrl: './check-student-attendance.component.html',
  styleUrls: ['./check-student-attendance.component.css']
})
export class CheckStudentAttendanceComponent implements OnInit {
  @Input() AdminTeacher: Boolean;
  displayedColumns = ['leaves', 'acknowledged'];
  dataSource;
  attendancePercent: number;
  student_name: string;
  teacher_name: string;
  percent;

  constructor(private readonly _attendanceService: AttendanceService, private readonly userService: UserService) { }

  ngOnInit() { }
  //   dataSource : CheckStudentAttendanceTable[] =[];
  //   user : User = this.userService.currentUser;
  //   role = this.user.role;

  OnChange(event: Event) {

    if (this.AdminTeacher == false || this.AdminTeacher == null) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.student_name = filterValue;
      console.log(this.student_name);

      this._attendanceService.getStudentAttendanceByName(this.student_name).subscribe((data: StudentAttendanceByName[]) => {
        this.percent = data[0].percent;
        this.dataSource = data.map(function (val) {
          const year = val.attendance_date.substr(0, 4);
          const month = val.attendance_date.substr(5, 2);
          const day = val.attendance_date.substr(8, 10);
          const date = new Date(Number(year), Number(month), Number(day));
          return {
            leaves: date,
            acknowledged: val.acknowledged
          };
        });
      });
    }
    else {
      const filterValue = (event.target as HTMLInputElement).value;
      this.teacher_name = filterValue;
      console.log(this.teacher_name);

      this._attendanceService.getTeacherAttendanceByName(this.teacher_name).subscribe((data) => {
        // this.percent = data[0].percent;
        // this.dataSource = data.map(function (val) {
        //   const year = val.attendance_date.substr(0, 4);
        //   const month = val.attendance_date.substr(5, 2);
        //   const day = val.attendance_date.substr(8, 10);
        //   const date = new Date(Number(year), Number(month), Number(day));
        //   return {
        //     leaves: date,
        //     acknowledged: val.acknowledged
        //   };
        // });
        console.log(data);
      });
    }
  }

  getStudentAttendance(studentName: string) {
    console.log(studentName);
    this._attendanceService.getStudentAttendance(studentName)
      .subscribe((checkStudentAttendanceTable: CheckStudentAttendanceTable[]) => {
        console.log(checkStudentAttendanceTable);
        this.dataSource = checkStudentAttendanceTable;
        this.attendancePercent = this.dataSource[0].percent;
      });
  }

}
