import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {NAVIGATION_PATH} from "_core/models/enums/path-navigation.enum"


@Component({
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    RouterLink
  ],
  template: `
    <div class="container">
      <div class="title-box">

        @for (char of title.split(''); track $index) {
          <h1 class="title-char" [id]="'char-'+$index">{{ char }}</h1>
        }
      </div>
      <div class="button-box">
        <button class="button-action"
                mat-raised-button color="accent"
                [routerLink]="Nav.HOME_SELECT_PLAYERS">
          Start
          <span>
          <mat-icon class="mat-icon-rtl-mirror icon" fontIcon="navigate_next"/>
        </span>
        </button>

      </div>
    </div>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = document.title.toUpperCase() + '...';
  protected readonly Nav = NAVIGATION_PATH ;
}
