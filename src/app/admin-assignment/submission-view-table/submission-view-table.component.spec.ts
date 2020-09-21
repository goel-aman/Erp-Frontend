import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionViewTableComponent } from './submission-view-table.component';

describe('SubmissionViewTableComponent', () => {
  let component: SubmissionViewTableComponent;
  let fixture: ComponentFixture<SubmissionViewTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionViewTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
