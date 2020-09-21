import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-assignment',
  templateUrl: './view-all-assignment.component.html',
  styleUrls: ['./view-all-assignment.component.css']
})

export class ViewAllAssignmentComponent implements OnInit {
  data = window.history.state.data[0];
  dataSource = this.data.latestAssignment;
  displayedColumns = window.history.state.data[1];

  ngOnInit() { }

}
