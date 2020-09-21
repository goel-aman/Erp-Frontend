import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentWithLowAttendanceComponent } from './student-with-low-attendance.component';

describe('StudentWithLowAttendanceComponent', () => {
  let component: StudentWithLowAttendanceComponent;
  let fixture: ComponentFixture<StudentWithLowAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentWithLowAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentWithLowAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
