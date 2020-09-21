import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSubmissionComponent } from './subject-submission.component';

describe('SubjectSubmissionComponent', () => {
  let component: SubjectSubmissionComponent;
  let fixture: ComponentFixture<SubjectSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
