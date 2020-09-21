import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderAttendanceComponent } from './calender-attendance.component';

describe('CalenderAttendanceComponent', () => {
  let component: CalenderAttendanceComponent;
  let fixture: ComponentFixture<CalenderAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
