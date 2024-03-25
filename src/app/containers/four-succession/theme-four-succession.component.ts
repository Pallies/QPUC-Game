import {Component, inject, OnInit} from '@angular/core';
import {BtnThemingComponent} from "../../../shared/components/button/btn-theming/btn-theming.component";
import {ActivatedRoute} from "@angular/router";
import {PlayerStoreService} from "../../../shared/store/player-store.service";
import {
  MatCardModule,
} from "@angular/material/card";
import {IUser} from "../../../_core/models/types/user.model";
import {ThemeStoreService} from "../../../shared/store/theme-store.service";
import {MatButton} from "@angular/material/button";
import {BtnNextComponent} from "../../../shared/components/button/btn-next/btn-next.component";
import {NAVIGATION_PATH} from "../../../_core/models/enums/path-navigation.enum";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'qpuc-theme-four-succession',
  standalone: true,
  imports: [
    BtnThemingComponent,
    MatCardModule,
    MatButton,
    BtnNextComponent,
  ],animations:[
    trigger('out-in',[
      state('out',style({
        visibility:'hidden',
        transform:'translateX(-50%) scale(0.25)'
      })),
      state('in',style({
        visibility:'visible',
      })),
      transition('out=>in',
        [animate('.5s')])
    ])
  ],
  template: `
    <div class="container">
      <div class="row">
        <h1>LE 4 A LA SUITE</h1>
        <div>
          <mat-card class="card">
            <mat-card-header class="box">
              <div mat-card-avatar [style.background-image]="user.avatarUrl"></div>
              <mat-card-title class="text"> {{ user.name }}</mat-card-title>
            </mat-card-header>
          </mat-card>
        </div>
      </div>

      @for (theme of $storeThemes.themes; track $index) {
        <qpuc-btn-theming [theming]="theme" [visible]="user.theme==theme"
                          (disabledChanges)="deactivated=!deactivated"
                          [disabled]="deactivated"
        >
        </qpuc-btn-theming>
      }

        <div class="container-box" [@out-in]="deactivated?'in':'out'">
          <qpuc-btn-next name="Suite" size="medium" color="accent" [routerLink]="Nav.FOUR_SUCCESSION"/>
        </div>

    </div>
  `,
  styles: `
    .container {
      & .row {
        grid-column: 1/3;
        justify-self: center;
        align-self: center;
        font-size: xxx-large;
      }
      &-box{
        position: absolute;
        top:70%;
        left:50%;
        transform: translateX(-50%);
      }
      display: grid;
      grid-template-rows:2fr 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
    }


    .card {
      background-color: transparent !important;
      border-top: solid 2px #00d0ff;
      box-shadow: none !important;

      & [mat-card-avatar] {
        background-position: center;
        background-size: 300%;
        transform: scale(1.5);
      }

      & mat-card-header {
        width: 100%;
        margin-top: 2rem;
        justify-content: center;
      }

      & .text {
        margin-left: 2rem;
        justify-self: center;
        text-align: center;
      }

    }
  `
})
export class ThemeFourSuccessionComponent implements OnInit {

  $routeActived = inject(ActivatedRoute);
  $storePlayers = inject(PlayerStoreService);
  $storeThemes = inject(ThemeStoreService);
  deactivated=false;
  user!: IUser;

  ngOnInit(): void {
    const index = this.$routeActived.snapshot.params['id'];
    this.user = this.$storePlayers.players.at(index) as IUser;
  }

  protected readonly Nav = NAVIGATION_PATH;
}
