import {Component, computed, effect, inject, OnDestroy, signal} from '@angular/core';
import {PlayerStoreService} from "../../../shared/store/player-store.service";
import {FourSuccessionAudioService} from "./four-succession-audio.service";
import {NgStyle} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {HexagonComponent} from "../../../shared/components/hexagon/hexagon.component";
import {ThemeStoreService} from "../../../shared/store/theme-store.service";
import {Router} from "@angular/router";
import {NAVIGATION_PATH as NAV} from "../../../_core/models/enums/path-navigation.enum";
import {PlayerCardComponent} from "../../../shared/components/player-card/player-card.component";
import {IUser} from "../../../_core/models/types/user.model";
import {PlayerAll} from "../../../_core/models/types/player.model";

@Component({
  selector: 'qpuc-four-succession',
  standalone: true,
  imports: [
    NgStyle,
    MatButton,
    HexagonComponent,
    PlayerCardComponent
  ],
  templateUrl: './four-succession.component.html',
  styleUrl: './four-succession.component.scss'
})
export class FourSuccessionComponent implements OnDestroy {
  $storePlayer = inject(PlayerStoreService)
  $storeTheme = inject(ThemeStoreService)
  $router = inject(Router);
  player: IUser = this.$storePlayer.players.at(this.$storeTheme.index)|| PlayerAll[0];
  timer!: any;
  numberPlayer = signal(0)
  currentPoint = signal<number>(0);
  maxPoint: number = 0
  $audioService = inject(FourSuccessionAudioService)
  isStart = signal(false)
  isEnd = signal(false)
  isEnd$ = computed<boolean>(() => {
    return this.currentPoint() == 4 || this.isEnd();
  })

  constructor() {
    effect(() => {
      if (this.currentPoint() > this.maxPoint) {
        this.maxPoint = this.currentPoint()
      }
      if (this.currentPoint() == 4) {
        this.$audioService.qualified()
        this.end()
      } else if (this.currentPoint() > 0) {
        this.$audioService.rightAnswer()
      }
    })
    effect(() => {
      if (this.isStart()) {
        this.$audioService.start()
        this.timer = setTimeout(() => {
          this.isEnd.set(true)
          this.end()
        }, 40500)
      }
    });
  }

  reset() {
    this.currentPoint.set(0)
  }

  increment() {
    this.currentPoint.update(v => v + 1)
  }

  end() {
    this.$audioService.stop();
    clearTimeout(this.timer);
    this.$storeTheme.nextPlayer();

    // this.players = this.players.map((p, i, arr) => {
    //   if (i == this.numberPlayer()) {
    //     p.score = this.maxPoint
    //   }
    //   return p
    // })

  }

  async next() {
    const index = this.$storeTheme.index;
    if (index < 4)
      await this.$router.navigate([`${NAV.FOUR_SUCCESSION_THEMES}/${index}`])
    else
      await this.$router.navigate([`${NAV.FACE_TO_FACE_INTRO}`])
  }

  ngOnDestroy(): void {
    this.numberPlayer.update(v => v + 1)
    this.currentPoint.set(0);
    this.maxPoint = 0;
    this.isStart.set(false)
    this.isEnd.set(false)
  }
}
