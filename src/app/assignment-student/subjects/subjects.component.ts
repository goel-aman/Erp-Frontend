import { AttendanceService } from 'src/services/attendance.service';
import { Component, OnInit } from '@angular/core';
import { subject } from 'src/models/models';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})

export class SubjectsComponent implements OnInit {
  subjects: subject[] = [];

  constructor(private _assignmentService: AttendanceService) { }

  ngOnInit() {
    this._assignmentService.getStudentSubmittedAssignment(1).subscribe((data) => {
      let x = Object.keys(data);
      for (let i = 0; i < x.length; i++) {
        let subjectt = data[x[i]];
        this.subjects.push({
          subject: x[i],
          teacherName: subjectt["teacher-name"],
          noOfAssignment: subjectt["assignment-count"],
          lateSubmission: subjectt["late-submission"],
          averageMarks: subjectt["average_marks"],
          status: subjectt["status"] || "unchecked",
        });
      }
    });
  }
}
