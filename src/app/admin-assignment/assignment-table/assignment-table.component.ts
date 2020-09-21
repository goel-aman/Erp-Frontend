import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment-table',
  templateUrl: './assignment-table.component.html',
  styleUrls: ['./assignment-table.component.css']
})

export class AssignmentTableComponent implements OnInit {
  @Input('dataSource') dataSource;
  @Input('displayedColumns') displayedColumns;

  constructor(private route: Router) { }

  ngOnInit() {}

  redirectTo() {
    this.route.navigate(['/assignment/submissions-view']);
  }

}
