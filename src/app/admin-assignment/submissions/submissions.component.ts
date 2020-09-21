import { Component, OnInit } from '@angular/core';

interface assignment {
  sno: string,
  topic: string,
  from: string,
  to: string,
  status: string,
  submissions: number,
}

interface assignments {
  subject: string,
  classes: string,
  unchecked: string,
  latestAssignment: assignment[]
}

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})

export class SubmissionsComponent implements OnInit {
  display = false;
  displaycontent = null;
  displayedColumns: string[] = ['sno', 'topic', 'from', 'to', 'status', 'submissions', 'reminder', 'view'];
  subjects: assignments[] = [
    {
      subject: "Science",
      classes: "4-A",
      unchecked: "3",
      latestAssignment: [{
        sno: "1",
        topic: "Kile",
        from: "June 28,2020",
        to: "June 29,2020",
        status: "checked",
        submissions: 5
      },
      {
        sno: "2",
        topic: "Hello World",
        from: "June 27,2020",
        to: "June 30,2020",
        status: "checked",
        submissions: 5
      }]
    },
    {
      subject: "Science",
      classes: "4-A",
      unchecked: "3",
      latestAssignment: [{
        sno: "1",
        topic: "Kile",
        from: "June 28,2020",
        to: "June 29,2020",
        status: "unchecked",
        submissions: 5
      },
      {
        sno: "2",
        topic: "Hello World",
        from: "June 27,2020",
        to: "June 30,2020",
        status: "checked",
        submissions: 5
      }]
    },
    {
      subject: "Science",
      classes: "4-A",
      unchecked: "3",
      latestAssignment: [{
        sno: "1",
        topic: "Kile",
        from: "June 28,2020",
        to: "June 29,2020",
        status: "checked",
        submissions: 5
      },
      {
        sno: "2",
        topic: "Hello World",
        from: "June 27,2020",
        to: "June 30,2020",
        status: "unchecked",
        submissions: 5
      }]
    },
    {
      subject: "Science",
      classes: "4-A",
      unchecked: "3",
      latestAssignment: [{
        sno: "1",
        topic: "Kile",
        from: "June 28,2020",
        to: "June 29,2020",
        status: "unchecked",
        submissions: 5
      },
      {
        sno: "2",
        topic: "Hello World",
        from: "June 27,2020",
        to: "June 30,2020",
        status: "unchecked",
        submissions: 5
      }]
    }];

  displayHidden(subject) {
    this.displaycontent = subject;
    this.display = !this.display;
  }

  ngOnInit() { }

}
