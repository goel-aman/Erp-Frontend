import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllAssignmentComponent } from './view-all-assignment.component';

describe('ViewAllAssignmentComponent', () => {
  let component: ViewAllAssignmentComponent;
  let fixture: ComponentFixture<ViewAllAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
