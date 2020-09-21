import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  sideNavOpened:boolean= false;
  @Output() valueToHeader: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav(){
    this.sideNavOpened = !this.sideNavOpened;
    this.valueToHeader.emit(this.sideNavOpened);
  }
}
