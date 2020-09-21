import { Component, OnInit } from '@angular/core';

interface student {
  adminNo: number,
  studentName: string,
  dateOfSubmission: string,
  status: string,
  marks: string,
  percentage: number,
}

interface submissionsView {
  subject: string,
  class: string,
  topic: string,
  type: string,
  dateOfAssigning: string,
  deadline: string,
  remarks: string,
  // data: student[]
}

@Component({
  selector: 'app-submissions-view',
  templateUrl: './submissions-view.component.html',
  styleUrls: ['./submissions-view.component.css']
})
export class SubmissionsViewComponent implements OnInit {
  ngOnInit() { }

  assignment: submissionsView = {
    subject: "Science",
    class: "4-A",
    topic: "Laws Of Motion- 1st Law",
    type: "Subjective",
    dateOfAssigning: "May 12,2020",
    deadline: "May 12,2020",
    remarks: "",
  };

  displayedColumns: string[] = ['adminNo', 'studentName', 'dateOfSubmission', 'status', 'marks', 'percentage', 'open'];

  studentAssignment: student[] = [
    {
      adminNo: 1,
      studentName: "Aman Goel",
      dateOfSubmission: "May 22, 2020",
      status: "unchecked",
      marks: "-",
      percentage: 93,
    },
    {
      adminNo: 1,
      studentName: "Shrey Datta",
      dateOfSubmission: "May 22, 2020",
      status: "checked",
      marks: "27/30",
      percentage: 93,
    },
    {
      adminNo: 1,
      studentName: "Shrey Datta",
      dateOfSubmission: "May 22, 2020",
      status: "unchecked",
      marks: "-",
      percentage: 93,
    },
    {
      adminNo: 1,
      studentName: "Shrey Datta",
      dateOfSubmission: "May 22, 2020",
      status: "unchecked",
      marks: "27/30",
      percentage: 93,
    }
  ];

  status = [
    { value: 'checked' },
    { value: 'unchecked' },
  ];
}
