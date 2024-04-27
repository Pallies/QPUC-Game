import {
  AfterViewInit,
  Component,
  computed,
  inject,
  QueryList, signal,
  ViewChildren,
} from '@angular/core';
import {RectangleComponent} from "../../../shared/components/rectangle/rectangle.component";
import {PlayerCardComponent} from "../../../shared/components/player-card/player-card.component";
import {PlayerStoreService} from "../../../shared/store/player-store.service";
import {MatButtonModule} from "@angular/material/button";
import {translateAnimation} from "../../../assets/animations/translate.animation";
import {BtnTakeLeaveComponent} from "../../../shared/components/button/btn-take-leave/btn-take-leave.component";
import {AnimationManagementService} from "./animation-management.service";
import {VisibilityDirective} from "../../../_core/directives/visibility.directive";
import {NgIf} from "@angular/common";
import {RectangleService} from "./rectangle.service";
import {TurnPlayerService} from "./turn-player.service";
import {WinLooseButtonService} from "./win-loose-button.service";


@Component({
  selector: 'qpuc-face-to-face',
  standalone: true,
  imports: [
    RectangleComponent,
    PlayerCardComponent,
    MatButtonModule,
    BtnTakeLeaveComponent,
    VisibilityDirective,
    NgIf
  ],
  animations: [translateAnimation],
  templateUrl: './face-to-face.component.html',
  styleUrl: './face-to-face.component.scss'
})
export class FaceToFaceComponent implements AfterViewInit {
  $storePlayers = inject(PlayerStoreService);
  $animation = inject(AnimationManagementService);

  $rectangle = inject(RectangleService);
  $turnPlayer = inject(TurnPlayerService);
  $winLooseService = inject(WinLooseButtonService)
  players = this.$storePlayers.players;

  @ViewChildren('rectangle') rectangles!: QueryList<RectangleComponent>
  choiceBeetweenTakeLeave = signal(false)
  isStarted = signal<undefined | boolean>(undefined)
  buttonName = computed<string>(() => this.isStarted() ? "Stop" : "Commencez")
  viewButtonWinLoose = signal(false)

  pursuit() {
    this.$winLooseService.poursuit().then(end=> {
      console.log(end)
      if (end){
        this.init()
      }
    });
  }

  ngAfterViewInit(): void {
    this.rectangles?.forEach(el => this.$rectangle.setComponent(el));
  }

  startOrStop() {
    if (this.isStarted()) {
      this.stop();
      return;
    }
    this.isStarted.set(true);
    this.viewButtonWinLoose.set(false)
    this.$winLooseService.start();
  }

  stop() {
    this.isStarted.set(false);
    this.viewButtonWinLoose.set(true)
    this.$winLooseService.stop();
  }

  init() {
    this.choiceBeetweenTakeLeave.set(false)
    this.isStarted.set(undefined)
    this.viewButtonWinLoose.set(false)
  }

  win() {
    this.$winLooseService.win();
    this.init()
  }

  loose() {
    this.$winLooseService.loose();
    this.viewButtonWinLoose.set(false)
  }

  endTurn() {
  }

  endGame() {
  }
}
