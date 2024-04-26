import {inject, Injectable, signal} from "@angular/core";
import {FaceToFaceAudioService} from "./face-to-face-audio.service";
import {RectangleService} from "./rectangle.service";
import {CountDownService} from "./count-down.service";
import {AnimationManagementService} from "./animation-management.service";
import {TurnPlayerService} from "./turn-player.service";

@Injectable({
  providedIn: 'root'
})
export class WinLooseButtonService {
  $audio = inject(FaceToFaceAudioService)
  $countDown = inject(CountDownService);
  $rectangle = inject(RectangleService);
  $animate = inject(AnimationManagementService);
  $turn = inject(TurnPlayerService);
  pointCounterPlayerOne = signal(0);
  pointCounterPlayerTwo = signal(0);

  win() {
    this.$audio.rightAnswer()
    this.awarsPoints(this.$countDown.currentIndex)
    this.$turn.nextTurn();
    this.init();
  }

  loose() {
    this.$audio.falseAnswer();
    this.$animate.falseAnswer(this.$countDown.currentIndex)
  }

  start() {
    this.$audio.start()
    this.$rectangle.activate(this.$countDown.currentIndex)
  }

  poursuit() {
    this.$rectangle.activate(this.$countDown.decrement());
  }

  stop() {
    this.$audio.stop()
    this.$rectangle.stop(this.$countDown.currentIndex)
  }

  init() {
    this.$rectangle.init()
    this.$animate.init();
    this.$countDown.init();
  }
  awarsPoints(index:number){
    this.$animate.isLeftOrRight(index)?
      this.pointCounterPlayerOne.update(v=>v+(++index)):
      this.pointCounterPlayerTwo.update(v=>v+(++index));
    console.log(this.pointCounterPlayerOne())
    console.log(this.pointCounterPlayerTwo())
  }
}
