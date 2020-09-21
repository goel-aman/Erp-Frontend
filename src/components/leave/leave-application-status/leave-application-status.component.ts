import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { ApplicationStatusCard, User } from '../../../models/models';
import { AttendanceService } from './../../../services/attendance.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-leave-application-status',
  templateUrl: './leave-application-status.component.html',
  styleUrls: ['./leave-application-status.component.css']
})

export class LeaveApplicationStatusComponent implements OnInit {
  private eventsSubscription: Subscription;
  @Input() events: Observable<void>;
  applicationStatusCard: ApplicationStatusCard[] = [];
  user: User = this.userService.currentUser;
  user_id = Number(this.user.user_id);

  constructor(private readonly userService: UserService, private attendanceService: AttendanceService) { }

  ngOnInit() {
    this.attendanceService.getApplicationStatus(this.user_id).subscribe(
      (applicationStatus: ApplicationStatusCard[]) => {
        this.applicationStatusCard = applicationStatus;
      });

    this.eventsSubscription = this.events.subscribe(() => {
      this.attendanceService.getApplicationStatus(this.user_id).subscribe(
        (applicationStatus: ApplicationStatusCard[]) => {
          this.applicationStatusCard = applicationStatus;
        }
      );
    });
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }
}
