import {Component, OnInit, Input} from '@angular/core';
import {ChartOptions} from 'chart.js';
import {AttendanceService} from '../../../services/attendance.service';
import {StudentAttendancePercentage, User, PieChartTeacherLogin} from '../../../models/models';
import {UserService} from 'src/services/user.service';

@Component({
  selector: 'app-pie-attendance',
  templateUrl: './pie-attendance.component.html',
  styleUrls: ['./pie-attendance.component.css'],
})

export class PieAttendanceComponent implements OnInit {
  @Input() studentId!: number;
  @Input() AdminTeacher: Boolean;
  ActivateAdminTeacher;
  user: User = this.userService.currentUser;
//   role = this.user.role;
//   teacherId = this.user.teacher_id;
  doughnutChartLabels!: string[];
  doughnutChartData: number[] = [];
  doughnutChartType = 'doughnut';
  doughnutChartColors: any = [
    {
      backgroundColor: ['#f1c40f', '#2ecc71', '#e74c3c'],
    },
  ];
  doughnutOptions: ChartOptions = {
    cutoutPercentage: 90,
    animation: {
      duration: 0,
    },
    legend: {
      position: 'right',
      labels: {
        fontSize: 10,
        usePointStyle: true,
      },
    },
  };
  chart: Chart;

  constructor(private _attendanceService: AttendanceService, private readonly userService: UserService) { }

  ngOnInit() {
    this.ActivateAdminTeacher = this.AdminTeacher;
    if (this.user.role == 'Admin') {

      // Teacher - Admin
      if(this.ActivateAdminTeacher == true){
        this._attendanceService.getTeacherLatestDateAttendancePieChart().subscribe((data) => {
          const cummulativeAttendance = data[0];
          this.doughnutChartData = [
            Number(cummulativeAttendance.Late),
            Number(cummulativeAttendance.Present),
            Number(cummulativeAttendance.Absent)
          ];
          this.doughnutChartLabels = ['Late','Present','Absent']
          console.log(data);
        });
        return;
      }
      
      // Student - Admin
      this._attendanceService.getAttendancePieChart().subscribe((data) => {
        const cummulativeAttendance = data[0];
        this.doughnutChartData = [
          Number(cummulativeAttendance.Late),
          Number(cummulativeAttendance.Present),
          Number(cummulativeAttendance.Absent)
        ];
        console.log(this.doughnutChartData);
        this.doughnutChartLabels = ['Late', 'Present', 'Absent'];
      });
      return ;
    }
    else {
      this._attendanceService.getStudenAttendancePercentage(this.studentId)
        .subscribe(
          (attendancePercentage: StudentAttendancePercentage) => {
            const attendance = attendancePercentage.attendance;
            if (attendance.length) { 
//   ngOnInit() {
//     if(this.role == "Teacher"){
//       this._attendanceService.getTeacherLoginPieChart(this.teacherId)
//       .subscribe(
//         (attendancePercentage : PieChartTeacherLogin[]) => {
//           console.log("data in pie chart: ",attendancePercentage);
//           if(attendancePercentage.length){
//             for(const cummulativeAttendance of attendancePercentage){
//               this.doughnutChartData = [
//                 Number(cummulativeAttendance.average_class_late),
//                 Number(cummulativeAttendance.average_class_present),
//                 Number(cummulativeAttendance.average_class_absent),
//               ];
//             }
//           }
         
//           console.log("doughnutChartData student:",this.doughnutChartData);
//           this.doughnutChartLabels = ['Late', 'Present', 'Absent'];
//         },
//         (error) => {
//           console.log(error); 
//         });
//     }else{
//       this._attendanceService.getStudenAttendancePercentage(this.studentId)
//         .subscribe(
//           (attendancePercentage: StudentAttendancePercentage) => {
//             console.log('attendancePercentage',attendancePercentage);
//             const attendance = attendancePercentage.attendance;
//             if(attendance.length) {
              const cummulativeAttendance = attendance[0];
              this.doughnutChartData = [
                Number(cummulativeAttendance.late_percent),
                Number(cummulativeAttendance.attendance_percent),
                Number(cummulativeAttendance.absent_percent),
              ];
              this.doughnutChartLabels = ['Late', 'Present', 'Absent'];
            }
          },
          (error) => {
            console.log(error); // Replace this by Matsnackbar
          });
    }
  }
}
