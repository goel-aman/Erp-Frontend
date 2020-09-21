import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AcknowledgeLeaveDialog } from '../acknowledge-leave-dialog/ackowledge-leave-dialog';
import { LeaveRecords, LeaveRecord, User, LeaveRecordsTeacherLogin, LeaveRecordTeacherLogin, TeacherTodaysAbsentees, AbsenteesRecord } from '../../../models/models';
import { AttendanceService } from '../../../services/attendance.service';
import { UserService } from 'src/services/user.service';

const _ATTENDANCE_STATUS_MAP = {
  'A': 'Absent',
  'L': 'Late',
}

@Component({
  selector: 'leave-record',
  templateUrl: './leave_record.component.html',
  styleUrls: ['./leave_record.component.css'],
})
export class LeaveRecordComponent implements OnInit {
  user: User = this.userService.currentUser;
  role = this.user.role;
  teacherId = this.user.teacher_id;
  studentId = this.user.student_id;
  attendanceRecords: LeaveRecord[] = [];
  todayAbsenteesRecord: AbsenteesRecord[];
  attendanceRecordForTeacherLogin: LeaveRecordTeacherLogin[] = [];
  @Input() isAdmin;

  constructor(
    private readonly dialog: MatDialog,
    private readonly _attendanceService: AttendanceService,
    private readonly userService: UserService) {
    // this.getStudentLeaveRecords(this.studentId);
  }

  ngOnInit() {
    if (this.isAdmin != true) {
      this.getStudentLeaveRecords(this.studentId);
    }
    if (this.isAdmin == true) {
      this.getAdminTeacherLeaveRecords();
    }

    if (this.role == "Teacher") {
      this.getTeacherLeaveRecords(this.teacherId);
    } else {
      this.getStudentLeaveRecords(this.studentId);
    }
  }


  getStudentLeaveRecords(studentId: number) {
    this._attendanceService.getStudentLeaveRecords(studentId)
      .subscribe((leaveRecords: LeaveRecords) => {
        // Sort the leave records to bring unacknowledged leaves at the top.
        const sortedLeaveRecords = leaveRecords.leave_records
          .sort((leaveRecordAcknowledged: LeaveRecord, leaveRecordNotAcknowledged: LeaveRecord) =>
            Number(leaveRecordAcknowledged.parent_acknowledged) - Number(leaveRecordNotAcknowledged.parent_acknowledged));

        for (const leaveRecord of sortedLeaveRecords) {
          const record: LeaveRecord = {
            attendance_date: leaveRecord.attendance_date,
            status: _ATTENDANCE_STATUS_MAP[leaveRecord.status],
            parent_acknowledged: leaveRecord.parent_acknowledged ? 'Acknowledged' : 'Unacknowledged',
            leave_type: leaveRecord.leave_type || 'UnInformed leave',
            parent_remarks: leaveRecord.parent_remarks,
          }
          this.attendanceRecords.push(record);
        }
      },
        (error) => {
          console.log(error);
        })
  }

  getAdminTeacherLeaveRecords() {
    this._attendanceService.getTeacherTodaysAbsentees().subscribe((data: TeacherTodaysAbsentees[]) => {
      this.todayAbsenteesRecord = data.map(function (val) {
        return {
          teacher_name: val.name,
          attendance_status: val.attendance_status || "Absent",
          approval_status: val.approval_status || "Approved"
        }
      });
    });
  }

  getTeacherLeaveRecords(teacherId: number) {
    this._attendanceService.getTeacherLeaveRecords(teacherId)
      .subscribe((leaveRecords: LeaveRecordsTeacherLogin) => {
        for (const leaveRecord of leaveRecords.leave_records) {
          const record: LeaveRecordTeacherLogin = {
            student_name: leaveRecord.student_name,
            status: _ATTENDANCE_STATUS_MAP[leaveRecord.status],
            parent_acknowledged: leaveRecord.parent_acknowledged || 'Unacknowledged',
            parent_notified: leaveRecord.parent_notified || 'UnInformed leave'
          }
          this.attendanceRecordForTeacherLogin.push(record);
        }
      },
        (error) => {
          console.log(error);
        })
  }

  acknowledgeLeave(leaveRecord: LeaveRecord) {
    const dialogRef = this.dialog.open(AcknowledgeLeaveDialog, {
      width: '48vw',
      data: leaveRecord,
    });

    dialogRef.afterClosed().subscribe((leaveRecord: LeaveRecord | undefined) => {
      if (leaveRecord && leaveRecord.parent_acknowledged === 'Unacknowledged') {
        this._attendanceService.updateStudentLeaveRecord(this.studentId, leaveRecord.attendance_date, leaveRecord.parent_remarks)
          .subscribe(() => {
            const recordIndex = this.attendanceRecords
              .findIndex((attendanceRecord) => attendanceRecord.attendance_date === leaveRecord.attendance_date);
            const record = this.attendanceRecords.splice(recordIndex, 1)[0];
            record.parent_acknowledged = 'Acknowledged';
            this.attendanceRecords.push(record);
          },
            () => {
              console.log('Failed to update leave record status.');
            });
      }
    })
  }
}
