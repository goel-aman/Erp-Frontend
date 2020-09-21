import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentAttendanceDashboardComponent } from './admin-student-attendance-dashboard.component';

describe('AdminStudentAttendanceDashboardComponent', () => {
  let component: AdminStudentAttendanceDashboardComponent;
  let fixture: ComponentFixture<AdminStudentAttendanceDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStudentAttendanceDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudentAttendanceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
