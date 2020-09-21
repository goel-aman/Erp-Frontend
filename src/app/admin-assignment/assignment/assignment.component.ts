import { Component, OnInit, AfterContentInit, EventEmitter } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MediaChange, MediaObserver} from "@angular/flex-layout";

interface Assignments{
  subject: string,
  class:string,
  topic : string,
  type: string,
  deadline: string
}

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
  
export class AssignmentComponent implements OnInit,AfterContentInit {
  lengthOfCard =  5;
  breakpoint: number;
  numOfUpload = [1];
  selectedIndex: number;

  constructor(private activatedRoute: ActivatedRoute,public route: Router,public media: MediaObserver) {}

  ngOnInit(){
    this.lengthOfCard = (this.activeAssignments.length > 5) ? this.activeAssignments.length : 5;
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.selectedIndex) {
        this.selectedIndex = params.selectedIndex;
        this.route.navigate([], {
          queryParams: {
            selectedIndex: null,
          },
          queryParamsHandling: 'merge',
        });
      }
    });
  }

  gridByBreakpoint = {
    xl: 2,
    lg: 2,
    md: 2,
    sm: 1,
    xs: 1
  }

  ngAfterContentInit() {
    this.media.asObservable().subscribe((change: MediaChange[]) => {
      this.breakpoint = this.gridByBreakpoint[change[0].mqAlias];
    });
  }
  
  assignmentInput = {
    class: "",
    section: "",
    subject: "",
    date: "",
    topic: "",
    selectedFile1: null,
    type1:"",
    marks: "",
    remarks: ""
  }

  assignmentTypes= [
    {value: 'MCQ'},
    {value: 'Subjective'},
    {value: 'Manual'}
  ];
  
  activeAssignments: Assignments[] = [{
    subject: "Science",
    class: "4-C",
    topic: "Laws of motion",
    type: "MCQ",
    deadline : "June 20, 2020"
  },
  {
    subject: "Science",
    class: "4-C",
    topic: "Laws of motion",
    type: "MCQ",
    deadline : "June 20, 2020"
  },
  {
    subject: "Science",
    class: "4-C",
    topic: "Laws of motion",
    type: "MCQ",
    deadline : "June 20, 2020"
  },
  {
    subject: "Science",
    class: "4-C",
    topic: "Laws of motion",
    type: "MCQ",
    deadline : "June 20, 2020"
  },
  {
    subject: "Science",
    class: "4-C",
    topic: "Laws of motion",
    type: "MCQ",
    deadline : "June 20, 2020"
  }];

  addAssignment(){
    this.numOfUpload.push(this.numOfUpload.length+1); ;
    this.assignmentInput["selectedFile" + this.numOfUpload.length] = null;
    this.assignmentInput["type" + this.numOfUpload.length] = "";
    this.lengthOfCard = (this.numOfUpload.length+2 > this.lengthOfCard) ? this.numOfUpload.length+2 : this.lengthOfCard;
  }

  onFileSelected(event,k){
    this.assignmentInput["selectedFile" + k] = event.target.files[k-1];
  }

  onSubmit(){
   
  }
} 