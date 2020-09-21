import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieAttendanceComponent } from './pie-attendance.component';
import { AppService } from 'src/app/app.service';

describe('PieAttendanceComponent', () => {
  let component: PieAttendanceComponent;
  let fixture: ComponentFixture<PieAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PieAttendanceComponent],
      providers: [AppService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
