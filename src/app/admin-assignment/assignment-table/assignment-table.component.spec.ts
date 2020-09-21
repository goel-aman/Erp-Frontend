import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentTableComponent } from './assignment-table.component';

describe('AssignmentTableComponent', () => {
  let component: AssignmentTableComponent;
  let fixture: ComponentFixture<AssignmentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
