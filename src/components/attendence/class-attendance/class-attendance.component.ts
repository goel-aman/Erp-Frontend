import {Component, OnInit, Input} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {AttendanceService} from '../../../services/attendance.service';
import {ClassAttendanceStats, AttendanceStats, User} from '../../../models/models';
import { UserService } from 'src/services/user.service';
import { AttendanceReportTeacherComponent } from '../attendance-report-teacher/attendance-report-teacher.component';

const _ATTENDANCE_STATS_COLUMNS_MAP = {
  'student_attendance': 'My Attendance',
  'average_attendance': 'Average Attendance',
  'highest_attendance': 'Highest Attendance',
}
const _ATTENDANCE_STATS_COLUMNS_MAP_FOR_TEACHER = {
  'average_attendance': 'Average attendance',
  'highest_attendance': 'Highest attendance of class',
  'lowest_attendance': 'Lowest attendance',
}

const lineChartDefaultDataSet: ChartDataSets = {
  data: [],
  label: '',
  lineTension: 0,
  fill: false,
}

@Component({
  selector: 'app-class-attendance',
  templateUrl: './class-attendance.component.html',
  styleUrls: ['./class-attendance.component.css'],
})
export class ClassAttendanceComponent implements OnInit {
  @Input() studentId!: number;
  //@Input() teacherId!: number;
  user : User = this.userService.currentUser;
  teacherId = this.user.teacher_id;
  role = this.user.role;
  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [
    'March',
    'April',
    'May',
  ];

  lineChartOptions: ChartOptions = {
    responsive: false,
    legend: {
      position: 'bottom',
      labels: {
        fontSize: 10,
        usePointStyle: true,
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'rgba(0, 0, 0, 0)',
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            borderDash: [8, 4],
          },
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    {
      // grey
      backgroundColor: '#f1c40f',
      borderColor: '#f1c40f',
    },
    {
      // dark grey
      backgroundColor: '#2ecc71',
      borderColor: '#2ecc71',
    },
    {
      // red
      backgroundColor: '#e74c3c',
      borderColor: '#e74c3c',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private readonly _attendanceService: AttendanceService,private readonly userService : UserService) {}

  ngOnInit() {
    if(this.role == "Teacher"){
      this._attendanceService.getTeacherLoginLineChart(this.teacherId)
      .subscribe(
        (classAttendanceStats: ClassAttendanceStats) => {
          console.log('classAttendanceStats: ',classAttendanceStats);
          this.prepareLineChartDataForTeacher(classAttendanceStats.class_attendance);
        },
        (error) => {
          console.log(error);
        });
    }else{
    this._attendanceService.getClassAttendance(this.studentId)
    .subscribe(
      (classAttendanceStats: ClassAttendanceStats) => {
        console.log('classAttendanceStats: ',classAttendanceStats);
        this.prepareLineChartData(classAttendanceStats.class_attendance);
      },
      (error) => {
        console.log(error);
      });
    }
  }

  prepareLineChartData(classAttendanceStats: AttendanceStats) {
    for (const attendanceStatsOrder of Object.keys(_ATTENDANCE_STATS_COLUMNS_MAP)) {
      const attendanceStats = classAttendanceStats[attendanceStatsOrder];
      const monthlyStats = [];
      for(const monthlyAttendanceStats of attendanceStats) {
        monthlyStats.push(monthlyAttendanceStats.attendance_percent);
      }
      const attendanceStatsDataSet = {...lineChartDefaultDataSet};
      attendanceStatsDataSet.data = monthlyStats;
      attendanceStatsDataSet.label = _ATTENDANCE_STATS_COLUMNS_MAP[attendanceStatsOrder];
      this.lineChartData.push(attendanceStatsDataSet);
    }
  }
  prepareLineChartDataForTeacher(classAttendanceStats: AttendanceStats) {
    for (const attendanceStatsOrder of Object.keys(_ATTENDANCE_STATS_COLUMNS_MAP_FOR_TEACHER)) {
      const attendanceStats = classAttendanceStats[attendanceStatsOrder];
      const monthlyStats = [];
      if(attendanceStats.length){
        for(const monthlyAttendanceStats of attendanceStats) {
          monthlyStats.push(monthlyAttendanceStats.attendance_percent);
        }
      }
      const attendanceStatsDataSet = {...lineChartDefaultDataSet};
      attendanceStatsDataSet.data = monthlyStats;
      attendanceStatsDataSet.label = _ATTENDANCE_STATS_COLUMNS_MAP_FOR_TEACHER[attendanceStatsOrder];
      this.lineChartData.push(attendanceStatsDataSet);
    }
  }
}
