import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {FaceToFaceAudioService} from "./face-to-face-audio.service";

@Injectable({
  providedIn: 'root'
})
export class AnimationManagementService {
  _takeOrLeave: WritableSignal<boolean | undefined>[] = [signal(undefined), signal(undefined), signal(undefined), signal(undefined)];

  init() {
    this._takeOrLeave.forEach(i => i.set(undefined));
  }

  takeOrLeavePlayer(value: number) {
    for (let i = value; i < value + 4; i++) {
      this._takeOrLeave[(i - value)].set(i % 2 == 0);
    }
  }

  falseAnswer(index: number) {
    let state = this._takeOrLeave[index]();
    this._takeOrLeave.filter((v, k) => k >= index)
    for (let i = 1; i <= index; i++) {
      if (index == i) this._takeOrLeave.forEach(v => v.set(!state));
      if (this._takeOrLeave[index - i]() != state) {
        this._takeOrLeave.filter((v, k) => k >= (index - i))
          .forEach(v => v.set(!state));
        break;
      }
    }
  }

  isLeftOrRight(index: number): boolean {
    return !!this._takeOrLeave[index]() ;
  }
}
