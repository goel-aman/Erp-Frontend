import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeacherDashboardComponent } from './admin-teacher-dashboard.component';

describe('AdminTeacherDashboardComponent', () => {
  let component: AdminTeacherDashboardComponent;
  let fixture: ComponentFixture<AdminTeacherDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTeacherDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTeacherDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
