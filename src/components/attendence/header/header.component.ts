import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  opened:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  getValueFromToolBar(sideNavState){
    console.log("in header",sideNavState);
    // this.opened = sideNavState;
  }

}
