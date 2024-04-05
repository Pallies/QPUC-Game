import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {RectangleComponent} from "../../../shared/components/rectangle/rectangle.component";
import {FaceToFaceAudioService} from "./face-to-face-audio.service";

@Injectable({
  providedIn: 'platform'
})
export class CountDownService {

  _component: RectangleComponent[] = [];
  _currentIndex: WritableSignal<number> = signal(3);
  _starter = signal(false);
$audio=inject(FaceToFaceAudioService)
  setComponent(component: RectangleComponent): void {
    this._component.push(component);
  }

  currentIndexDecrement(index: number) {
    let i = --index
    if (i < 0)
      return this.setEnd();

    this._currentIndex.set(i);
    this._component[i].active = true;
  }


  setEnd(): void {
    ;
  }

  start() {
    this._starter.update(v=>!v)
    let i = this._currentIndex();
    this._component[i].active = !this._component[i].active ?? undefined;
    this._starter()?this.$audio.start():this.$audio.stop();
  }
}
