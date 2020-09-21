import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface student {
  adminNo: number,
  studentName: string,
  dateOfSubmission: string,
  status: string,
  marks: string,
  percentage: number,
}

@Component({
  selector: 'app-submission-view-table',
  templateUrl: './submission-view-table.component.html',
  styleUrls: ['./submission-view-table.component.css']
})

export class SubmissionViewTableComponent implements OnInit {
  dataSource: MatTableDataSource<student>;
  @Input('dataSource') dataSourcee: student[];
  @Input('displayedColumns') displayedColumns;

  status = [
    { value: 'checked' },
    { value: 'unchecked' },
  ];

  applyFilter(event) {
    const filterValue = event.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.dataSourcee);
  }

}
