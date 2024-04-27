import {Component, HostBinding, Input, signal, WritableSignal} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {IUser} from "../../../_core/models/types/user.model";
import {MatButton} from "@angular/material/button";
import {style} from "@angular/animations";


@Component({
  selector: 'qpuc-player-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton,
  ],
  template: `
    <mat-card class="card">
      <mat-card-header>
        <mat-card-title>
          <p class="card_text">
            {{ user.name }}
            @if (this.user2) {
              <span class="card_text-left">
             -
              </span>
              <span class="card_text-right">
            {{ user2?.name }}
            </span>
            }
          </p>
        </mat-card-title>

      </mat-card-header>
      <div class="card_image-box">
        <img mat-card-image
             [class]="user2?'card_image-left':'card_image-center'"
             [src]="user.src"
             [style.object-position]="user.objectPosition"
             alt="Photo of player">
        @if (this.user2) {
          <img mat-card-image
               class="card_image-right"
               [src]="user2?.src"
               [style.object-position]="user2?.objectPosition"
               alt="Photo of player">
        }
      </div>
      <mat-card-actions>
        <div class="card_score-box">
          <button
            class="card_score-btn"
            mat-raised-button color="primary"
          >SCORE
          </button>
          <p class="card_score-point">
            <span>  {{ score() }} </span>
          </p>
          <div class="card_img-box">
            <img mat-card-image>
          </div>
        </div>

      </mat-card-actions>
    </mat-card>
    <ng-container class="container">
      <ng-content/>
    </ng-container>
  `,
  styles: [`
    .card {
      height: 100%;
      margin: 15% 0;
      max-width: 800px;
      background-color: #131432;

      mat-card-title, &_score-point {
        font-size: xxx-large !important;
      }

      &_text {
        text-align: center;
        margin-bottom: 4rem;
      }

      /* Applique un dégradé linéaire au texte */
      mat-card-header {
        display: inline-block;
        background: linear-gradient(180deg, #0594fa 0%, #14a6f5 50%, #1441f5 100%);
        background-clip: text;
        /* Pour les navigateurs basés sur Webkit (comme Chrome et Safari) */
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        z-index: 1;
      }

      mat-card-actions {
        margin-top: 4rem;
        flex-direction: column;
        justify-content: stretch;
      }

      &_image, &_text {
        &-center{
          transform: scale(2) translateX(1.5%) !important;
        }
        &-left {
          transform: scale(2) translateX(5%) !important;
        }

        &-right {
          transform: scale(2) translateX(-15%) !important;
        }

        &-box {
          display: flex;
          flex-direction: row;
        }
      }

      img {
        width: 450px;
        clip-path: ellipse(4rem 5rem);
        padding-top: 1rem;
        margin: 0;
      }

      &_img-box {
        clip-path: polygon(0 0, 100% 0, 81% 100%, 19% 100%);
        background-color: #673ab7;
        height: 400px;
      }
    }

    .card_score {
      &-box {
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        width: 60%;
        text-align: center;
      }

      &-point {
        border: #c99f33 5px solid;
      }
    }

  `]
})
export class PlayerCardComponent {

  @Input() user!: IUser;
  @Input() user2: IUser | undefined = undefined;
  @Input() score: WritableSignal<number> = signal(0);
}
