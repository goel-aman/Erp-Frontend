import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckStudentAttendanceComponent } from './check-student-attendance.component';

describe('CheckStudentAttendanceComponent', () => {
  let component: CheckStudentAttendanceComponent;
  let fixture: ComponentFixture<CheckStudentAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckStudentAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckStudentAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
