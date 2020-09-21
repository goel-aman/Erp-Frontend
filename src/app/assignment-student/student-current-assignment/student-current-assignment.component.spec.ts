import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCurrentAssignmentComponent } from './student-current-assignment.component';

describe('StudentCurrentAssignmentComponent', () => {
  let component: StudentCurrentAssignmentComponent;
  let fixture: ComponentFixture<StudentCurrentAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCurrentAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCurrentAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
