import { Component, OnInit, Input } from '@angular/core';
import { __values } from 'tslib';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ace-table',
  templateUrl: './ace-table.component.html',
  styleUrls: ['./ace-table.component.css'],
})
export class AceTableComponent<T> implements OnInit {
  constructor() {}
  readonly SrNo = 'SrNo';
  private _mappings = new BehaviorSubject<Map<string, (t: T) => any>>(null);
  private _includeSrNo = new BehaviorSubject<boolean>(null);
  @Input()
  dataSource: T[];
  @Input()
  set mappings(value: Map<string, (t: T) => any>) {
    this._mappings.next(value);
  }
  get mappings(): Map<string, (t: T) => any> {
    return this._mappings.getValue();
  }
  @Input()
  set includeSrNo(value: boolean) {
    this._includeSrNo.next(value);
  }
  get includeSrNo(): boolean {
    return this._includeSrNo.getValue();
  }

  displayedColums: string[];
  ngOnInit() {
    this._mappings.subscribe((val) => {
      this.displayedColums = [...val.keys()];
      this.setSrNumberDisplay();
    });

    this._includeSrNo.subscribe(() => this.setSrNumberDisplay());
  }

  setSrNumberDisplay() {
    if (this.includeSrNo) {
      if (!this.displayedColums.includes(this.SrNo)) {
        this.displayedColums.splice(0,0,this.SrNo);
      }
    } else {
      this.displayedColums = this.displayedColums.filter((c) => c != this.SrNo);
    }
  }
}
