import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApplicationStatusComponent } from './leave-application-status.component';

describe('LeaveApplicationStatusComponent', () => {
  let component: LeaveApplicationStatusComponent;
  let fixture: ComponentFixture<LeaveApplicationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveApplicationStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveApplicationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
