import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttendanceMode } from 'src/app/core/models/attendance-mode';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent implements OnInit {
  studentId!: number;
  constructor(private readonly _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((data) => {
      this.studentId = data['id'];
    });
    this._activatedRoute.data.subscribe((d) => {
      if (d.displayMode != null) {
        this.displayMode = d.displayMode;
        console.dir(this.displayMode);
      }
    });
    if (this.studentId == null) {
      this.studentId = 1;
    }
  }
  displayMode = AttendanceMode.Student;
  get isDisplayStudent() {
    return this.displayMode == AttendanceMode.Student;
  }
}
