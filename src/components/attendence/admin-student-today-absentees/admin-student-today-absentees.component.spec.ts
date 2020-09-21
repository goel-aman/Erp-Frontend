import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentTodayAbsenteesComponent } from './admin-student-today-absentees.component';

describe('AdminStudentTodayAbsenteesComponent', () => {
  let component: AdminStudentTodayAbsenteesComponent;
  let fixture: ComponentFixture<AdminStudentTodayAbsenteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStudentTodayAbsenteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudentTodayAbsenteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
