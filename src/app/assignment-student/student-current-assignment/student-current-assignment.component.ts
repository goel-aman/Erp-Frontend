import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Assignment {
  subject: string,
  topic: string,
  deadline: string,
  status: string,
  dateOfAssigning: string,
  teacherRemark: string,
  remarks: string,
}



@Component({
  selector: 'app-student-current-assignment',
  templateUrl: './student-current-assignment.component.html',
  styleUrls: ['./student-current-assignment.component.css']
})
export class StudentCurrentAssignmentComponent implements OnInit {
  ngOnInit() {
  }

  assignments: Assignment[] = [
    {
      subject: "Science",
      topic: "Reproduction",
      deadline: "May 22, 2020",
      status: 'Late',
      dateOfAssigning: "May 15,2020",
      teacherRemark: "Good Work",
      remarks: ""
    },{
      subject: "Science",
      topic: "Laws Of Motion",
      deadline: "May 22, 2020",
      status: 'Late',
      dateOfAssigning: "May 15,2020",
      teacherRemark: "Good Work",
      remarks: "Do your best"
    },
    {
      subject: "Math",
      topic: "Rotational Motion",
      deadline: "May 22, 2020",
      status: 'pending',
      dateOfAssigning: "May 15,2020",
      teacherRemark: "Good Work",
      remarks: "Do your best"
    },
    {
      subject: "Math",
      topic: "Environmental Science",
      deadline: "May 22, 2020",
      status: 'Late',
      dateOfAssigning: "May 15,2020",
      teacherRemark: "Good Work",
      remarks: ""
    }
  ];
  

  displayedColumns: string[] = ['subject', 'topic', 'deadline', 'status', 'dateOfAssigning', 'teacherRemark', 'open'];
  dataSource = new MatTableDataSource(this.assignments);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
