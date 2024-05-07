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
import {CounterPointService} from "./counter-point.service";
import {VisibilityDirective} from "../../../_core/directives/visibility.directive";

@Component({
  selector: 'qpuc-four-succession',
  standalone: true,
  imports: [
    NgStyle,
    MatButton,
    HexagonComponent,
    PlayerCardComponent,
    VisibilityDirective
  ],
  templateUrl: './four-succession.component.html',
  styleUrl: './four-succession.component.scss'
})
export class FourSuccessionComponent implements OnDestroy {
  $storePlayer = inject(PlayerStoreService)
  $storeTheme = inject(ThemeStoreService)
  $counter=inject(CounterPointService);
  $audioService = inject(FourSuccessionAudioService)
  $router = inject(Router);
  player: IUser = this.$storePlayer.players.at(this.$storeTheme.index) || PlayerAll[0];
  timer!: any;
  numberPlayer = signal(0)
  isStart = signal(false)
  isEnd = signal(false)
  isEnd$ = computed<boolean>(() => {
    return this.$counter.isEnd() || this.isEnd();
  })

  constructor() {
    effect(() => {
      if (this.$counter.isEnd()) {
        this.$audioService.qualified()
        this.end()
      } else if (this.$counter.currentPoint() > 0) {
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
    this.$counter.falseAnswer()
    this.$audioService.falseAnswer()
  }

  increment() {
    this.$counter.rigthAnswer()
  }

  end() {
    this.$audioService.stop();
    clearTimeout(this.timer);
    this.$storePlayer.players[this.$storeTheme.index].score = this.$counter.allocationPoints()
    this.$storeTheme.nextPlayer();
  }

  async next() {
    const index = this.$storeTheme.index;
    if (index < 4)
      await this.$router.navigate([`${NAV.FOUR_SUCCESSION_THEMES}/${index}`])
    else
      await this.$router.navigate([`${NAV.PRESENT_TWO}`])
  }

  ngOnDestroy(): void {
    this.numberPlayer.update(v => v + 1)
    this.$counter.init()
    this.isStart.set(false)
    this.isEnd.set(false)
  }
}
