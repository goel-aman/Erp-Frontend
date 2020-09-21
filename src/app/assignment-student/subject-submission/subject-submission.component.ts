import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface assignment {
  topic: string,
  dateOfAssigning: string,
  deadline: string,
  dateOfSubmission: string,
  marks: string,
  percentage: number,
  remarks: string
}

@Component({
  selector: 'app-subject-submission',
  templateUrl: './subject-submission.component.html',
  styleUrls: ['./subject-submission.component.css']
})

export class SubjectSubmissionComponent implements OnInit {

  subjectAssignment = {
    subject: "Science",
    teacherName: "Mrs Varalkshmi M",
    noOfAssignments: 57,
    lateSubmissions: 2,
    averageMarks: 72,
    assignment: [
      {
        topic: "Reproduction1",
        dateOfAssigning: "May 15,2020",
        deadline: "May 5,2020",
        dateOfSubmission: "May 22,2020",
        marks: "27/30",
        percentage: "23",
      },
      {
        topic: "Reproduction",
        dateOfAssigning: "May 15,2020",
        deadline: "May 5,2020",
        dateOfSubmission: "May 22,2020",
        marks: "27/30",
        percentage: "23",
        remarks: ""
      },
      {
        topic: "Reproduction",
        dateOfAssigning: "May 15,2020",
        deadline: "May 23,2020",
        dateOfsubmission: "aman",
        marks: "unchecked",
        percentage: "12",
        remarks: "Your Approach for solving the problem was very unique"
      },
      {
        topic: "Reproduction",
        dateOfAssigning: "May 24,2020",
        deadline: "May 25,2020",
        dateOfSubmission: "May 22,2020",
        marks: "unchecked",
        percentage: "5",
        remarks: "Do Your Best"
      }
    ]
  }

  ngOnInit() { }

  displayedColumns: string[] = ['topic', 'dateOfAssigning', 'deadline', 'dateOfSubmission', 'marks', 'percentage', 'view'];
  dataSource = new MatTableDataSource(this.subjectAssignment.assignment);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
