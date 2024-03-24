import {Component} from '@angular/core';
import { MatButton} from "@angular/material/button";
import { MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {NAVIGATION_PATH} from "src/_core/models/enums/path-navigation.enum"
import {BtnNextComponent} from "../../../shared/components/button/btn-next/btn-next.component";


@Component({
  selector: 'qpuc-accueil',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    RouterLink,
    BtnNextComponent
  ],
  template: `
    <div class="container">
      <div class="title-box">

        @for (char of title.split(''); track $index) {
          <h1 class="title-char" [id]="'char-'+$index">{{ char }}</h1>
        }
      </div>
      <qpuc-btn-next [routerLink]="Nav.HOME_SELECT_PLAYERS"/>
    </div>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = document.title.toUpperCase() + '...';
  protected readonly Nav = NAVIGATION_PATH ;
}
