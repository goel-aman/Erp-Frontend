import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AssignmentSubjectReport } from 'src/app/core/models/assignment-subject-report';
import { AssignmentTopicReport } from 'src/app/core/models/assignment-topic-report';
import { DatePipe } from '@angular/common';
import { Assignment } from 'src/app/core/models/assignment';
import { SchoolClass } from 'src/models/models';

@Component({
  selector: 'app-assignment-report',
  templateUrl: './assignment-report.component.html',
  styleUrls: ['./assignment-report.component.css', '../../../mat-styles.css']
})
export class AssignmentReportComponent implements OnInit {
  constructor() {}
  activeReport: AssignmentTopicReport;
  showingReport = false;
  academicYears = [2018, 2019, 2020];
  selectedYear = 2020;
  subjects = ['English', 'Maths', 'Science', 'Social Science'];

  selectedMonth = 'Jan';
  uploadedBy: string;
  classes: SchoolClass[] = [
    {
      section: 'A',
      standard: 4,
    },
    {
      section: 'B',
      standard: 4,
    },
    {
      section: 'C',
      standard: 4,
    },
    {
      section: 'D',
      standard: 4,
    },
  ];
  class = <SchoolClass>{
    section: 'C',
    standard: 4,
  };
  months = [
    'Jan',
    'Feb',
    'Mar',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  subjectReports: AssignmentSubjectReport[] = [
    {
      active: 2,
      noOfAssignments: 10,
      status: 'Checked',
      subject: 'Science',
      pendingSubmissions: 10,
    },
    {
      active: 4,
      noOfAssignments: 5,
      status: 'UnChecked',
      subject: 'English',
      pendingSubmissions: 0,
    },
    {
      active: 5,
      noOfAssignments: 3,
      status: 'Checked',
      subject: 'Math',
      pendingSubmissions: 2,
    },
    {
      active: 6,
      noOfAssignments: 2,
      status: 'Checked',
      subject: 'Social Science',
      pendingSubmissions: 12,
    },
  ];

  datePipe = new DatePipe('en-IN');
  topicReports: AssignmentTopicReport[] = [
    {
      assignedBy: { firstName: 'Varalaskhmi', lastName: 'Maharaja' },
      pendingSubmissions: 9,
      class: {
        section: 'C',
        standard: 4,
      },
      from: new Date(),
      to: new Date(),
      status: 'Checked',
      subject: 'Science',
      topic: 'laws of motion',
    },
    {
      assignedBy: { firstName: 'Varalaskhmi', lastName: 'Maharaja' },
      pendingSubmissions: 9,
      class: {
        section: 'C',
        standard: 4,
      },
      from: new Date(),
      to: new Date(),
      status: 'UnChecked',
      subject: 'Social Science',
      topic: 'french revolution',
    },
  ];
  topicReportsMappings = new Map<string, (a: AssignmentTopicReport) => any>();
  assignmentReport: Assignment[] = [
    {
      status: 'Checked',
      from: new Date(),
      marks: 20,
      maxMarks: 30,
      student: {
        admissionNumber: 1234,
        class: { section: 'A', standard: 4 },
        firstName: 'Shrey',
        lastName: 'Datta',
      },
    },
    {
      status: 'UnChecked',
      from: new Date(),
      student: {
        admissionNumber: 1234,
        class: { section: 'A', standard: 4 },
        firstName: 'Shrey',
        lastName: 'Datta',
      },
    },
    {
      status: 'Checked',
      from: new Date(),
      marks: 20,
      maxMarks: 30,
      student: {
        admissionNumber: 1234,
        class: { section: 'A', standard: 4 },
        firstName: 'Shrey',
        lastName: 'Datta',
      },
    },
    {
      status: 'UnChecked',
      from: new Date(),
      student: {
        admissionNumber: 1234,
        class: { section: 'A', standard: 4 },
        firstName: 'Shrey',
        lastName: 'Datta',
      },
    },
  ];
  assignmentReportsMappings = new Map<string, (a: Assignment) => any>();

  ngOnInit() {
    this.setTopicMappings();
    this.setAssignmentMappings();
  }
  setTopicMappings() {
    this.topicReportsMappings.set('Subject', (a) => a.subject);
    this.topicReportsMappings.set('Topic', (a) => a.topic);
    this.topicReportsMappings.set('From', (a) =>
      this.datePipe.transform(a.from, 'mediumDate')
    );
    this.topicReportsMappings.set('To', (a) =>
      this.datePipe.transform(a.to, 'mediumDate')
    );
    this.topicReportsMappings.set(
      'Class',
      (a) => a.class.standard + '-' + a.class.section
    );
    this.topicReportsMappings.set(
      'Assigned By',
      (a) => a.assignedBy.firstName + ' ' + a.assignedBy.lastName.charAt(0)
    );
    this.topicReportsMappings.set(
      'Submissions',
      (a) => a.pendingSubmissions + ' Pending'
    );
    this.topicReportsMappings.set('Status', (a) => a.status);
  }
  setAssignmentMappings() {
    this.assignmentReportsMappings.set(
      'Admn. No.',
      (a) => a.student.admissionNumber
    );
    this.assignmentReportsMappings.set(
      'Student Name',
      (a) => a.student.firstName + ' ' + a.student.lastName
    );
    this.assignmentReportsMappings.set('Date of Submission', (a) =>
      this.datePipe.transform(a.from, 'mediumDate')
    );
    this.assignmentReportsMappings.set(
      'Status',
      (a) => a.status
    );
    this.assignmentReportsMappings.set('Marks',(a)=>{
      if(a.marks||a.marks!=null){
        return a.marks + "/" +a.maxMarks;
      }
    });this.assignmentReportsMappings.set('Percentage',(a)=>{
      if(a.marks||a.marks!=null){
        return Math.floor(a.marks*100/ a.maxMarks) +"%";
      }
    });
  }
  openReport(report: AssignmentTopicReport) {
    this.showingReport = true;
    this.activeReport = report;
  }
}
