import {Component, Input} from '@angular/core';
import { MatCardModule} from "@angular/material/card";
import {IUser} from "../../../_core/models/types/user.model";


@Component({
  selector: 'qpuc-player-card',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  template: `
    <mat-card class="card">
      <mat-card-header>
        <mat-card-title>{{ user.name }}</mat-card-title>
      </mat-card-header>
      <img mat-card-image [src]="user.src" alt="Photo of player">
      <mat-card-actions>
        <ng-content/>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .card {
      max-width: 800px;
      background-color: #131432;

      mat-card-title {
        font-size: xxx-large !important;

      }

      /* Applique un dégradé linéaire au texte */
      mat-card-header {
        text-align: center;
        display: inline-block;
        background: linear-gradient(180deg, #0594fa 0%, #14a6f5 50%, #1441f5 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        /* Pour les navigateurs basés sur Webkit (comme Chrome et Safari) */
        -webkit-background-clip: text;
        z-index: 1;
      }

      mat-card-actions {
        margin-top: 4rem;
        flex-direction: column;
        justify-content: stretch;
      }

      img {
        clip-path: inset(0 30% 0 30%);
        transform: scale(1.4);
      }
    }
  `]
})
export class PlayerCardComponent {

  @Input() user!: IUser;
}
