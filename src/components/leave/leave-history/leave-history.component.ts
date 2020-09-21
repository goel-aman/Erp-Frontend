import { Component, OnInit, Input } from '@angular/core';
import { AttendanceService } from 'src/services/attendance.service';
import { LeaveHistory, User} from '../../../models/models';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {
  //@Input() empId!: number;
  user : User = this.userService.currentUser;
  empId = this.user.emp_id;
  displayedColumns = ['attendance_date', 'type_of_leave'];
  dataSource: LeaveHistory[] = [];
  // dataSource = leaveHistoryTable;

  constructor(private readonly _attendanceService: AttendanceService,private readonly userService: UserService) { }

  ngOnInit(): void {
    this.getTeacherLeaveHistory(this.empId);
  }
  getTeacherLeaveHistory(empId: number) {
    this._attendanceService.getTeacherLeaveHistory(empId)
      .subscribe((leaveHistory: LeaveHistory[]) => {
        this.dataSource = leaveHistory;
       },
       (error) => {
         console.log(error);
       })
  }


}

// const leaveHistoryTable: LeaveHistoryTable[] = [
//   {date: 'May 12,2020', leaveType: 'Privilage leave'},
//   {date: 'Feb 1,2020', leaveType: 'Casual leave'},
//   {date: 'Jan 15,2020', leaveType: 'Medical leave'},
//   {date: 'Jan 1,2020', leaveType: 'Medical leave'},
//   {date: 'Jan 5,2020', leaveType: 'Medical leave'}
// ];
