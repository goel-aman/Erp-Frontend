import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttendanceMode } from 'src/app/core/models/attendance-mode';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  //empId!: number;
  constructor(private readonly _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((data) => {
     // this.empId = data['id'];
    });
    this._activatedRoute.data.subscribe((d) => {
      if (d.displayMode != null) {
        this.displayMode = d.displayMode;
        console.dir(this.displayMode);
      }
    });
    // if (this.empId == null) {
    //   this.empId = 1;
    // }
  }
  displayMode = AttendanceMode.Student;
  get isDisplayStudent() {
    return this.displayMode == AttendanceMode.Student;
  }
  set isDisplayStudent(value) {}

}
