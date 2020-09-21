import { AttendanceService } from 'src/services/attendance.service';
import { Component, OnInit, Input } from '@angular/core';
import { TodayAbsentees } from 'src/models/models';

@Component({
  selector: 'app-admin-student-today-absentees',
  templateUrl: './admin-student-today-absentees.component.html',
  styleUrls: ['./admin-student-today-absentees.component.css']
})

export class AdminStudentTodayAbsenteesComponent implements OnInit {
  @Input('height') height: number;
  absenteess: any = [];
  absentees: any = [];
  status: string;
  status_value = ['all', 'acknowledged', 'Unacknowledged'];
  
  constructor(private readonly attendanceService: AttendanceService) { }

  mapping_status = {
    "A": "Absent",
    "L": "Late",
  }

  ngOnInit() {
    this.attendanceService.getTodaysAbsentees().subscribe((data: TodayAbsentees) => {
      console.log(data);
      this.absentees = data;
      this.absenteess = data;
    });
  }

  OnChange() {
    if (this.status == null || this.status == "all") {
      this.absenteess = this.absentees;
      return;
    }

    this.absenteess = this.absentees.filter((element, index, array) => {
      return (element.parent_acknowledged == this.status);
    });
  }
}
