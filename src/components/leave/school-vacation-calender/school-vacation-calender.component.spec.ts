import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolVacationCalenderComponent } from './school-vacation-calender.component';

describe('SchoolVacationCalenderComponent', () => {
  let component: SchoolVacationCalenderComponent;
  let fixture: ComponentFixture<SchoolVacationCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolVacationCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolVacationCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
