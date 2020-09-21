import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  Optional,
  forwardRef,
} from '@angular/core';
import {
  MatCalendar,
  MatDatepickerIntl,
  MatCalendarHeader,
} from '@angular/material/datepicker';

/** @title Datepicker with custom calendar header */

/** Custom header component for datepicker. */
@Component({
  selector: 'example-header',
  template: `
    <div class="mat-calendar-header">
      <div class="mat-calendar-controls">
        <button
          mat-icon-button
          type="button"
          [disabled]="!previousEnabled()"
          (click)="customPrev()"
          [attr.aria-label]="prevButtonLabel"
        >
          <
        </button>
        <div
          mat-button
          type="button"
          class="mat-calendar-period-button"
          [attr.aria-label]="periodButtonLabel"
          cdkAriaLive="polite"
        ></div>
        <div class="mat-calendar-spacer"></div>

        <div>{{ periodButtonText }}</div>

        <div class="mat-calendar-spacer"></div>

        <ng-content></ng-content>

        <button
          mat-icon-button
          type="button"
          [disabled]="!nextEnabled()"
          (click)="customNext()"
          [attr.aria-label]="nextButtonLabel"
        >
          >
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleHeader extends MatCalendarHeader<any> {
  /** Handles user clicks on the period label. */
  currentPeriodClicked(): void {
    this.calendar.currentView =
      this.calendar.currentView == 'month' ? 'multi-year' : 'month';
  }

  /** Handles user clicks on the previous button. */
  customPrev(): void {
    console.log(this.calendar.activeDate);
    this.previousClicked();
  }

  /** Handles user clicks on the next button. */
  customNext(): void {
    console.log(this.calendar.activeDate);
    this.nextClicked();
  }
}
