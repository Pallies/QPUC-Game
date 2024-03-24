import {Component, Input} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'qpuc-btn-next',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  template: `
    <button [class]="'button-'+size"
            mat-raised-button color="accent"
            [routerLink]="routerLink">
      Start
      <span>
          <mat-icon class="mat-icon-rtl-mirror icon" fontIcon="navigate_next"/>
        </span>
    </button>
  `,
  styles: `.button  {
      color: #131432 !important;
    &-large{
      font-size: xxx-large;
      margin: 1rem;
      padding: 2rem;
        .icon {
        font-size: 2rem;
        transform: translate(-25%, -25%);
      }
    }
    &-medium{
      font-size: x-large;
      margin: .5rem;
      padding: 1rem;
      .icon {
        font-size: 2rem;
      }
    }
  }

  `
})
export class BtnNextComponent {
  @Input() routerLink!:any;
  @Input()size='large';
}