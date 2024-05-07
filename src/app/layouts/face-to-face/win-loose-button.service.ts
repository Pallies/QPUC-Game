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

  init() {
    this.$turn.nextTurn();
    this.$rectangle.init()
    this.$animate.init();
    this.$countDown.init();
    if(this.$turn.isEnd)
      this.$audio.endGame()
  }
  start() {
    this.$audio.start()
    this.$rectangle.activate(this.$countDown.currentIndex)
  }

  stop() {
    this.$audio.stop()
    this.$rectangle.stop(this.$countDown.currentIndex)
  }

  async poursuit(): Promise<boolean> {
    this.$rectangle.activate(this.$countDown.decrement())
    if (this.$countDown.currentIndex < 0) {
      this.end()
      return Promise.resolve(true)
    }
    return Promise.resolve(false)
  }
  win() {
    this.$audio.rightAnswer()
    this.awarsPoints(this.$countDown.currentIndex)
    this.init();
  }
  awarsPoints(index: number) {
    this.$animate.isLeftOrRight(index) ?
      this.pointCounterPlayerOne.update(v => v + (++index)) :
      this.pointCounterPlayerTwo.update(v => v + (++index));
  }

  loose() {
    this.$audio.falseAnswer();
    this.$animate.falseAnswer(this.$countDown.currentIndex)
  }
  end() {
    this.init()
  }
}
