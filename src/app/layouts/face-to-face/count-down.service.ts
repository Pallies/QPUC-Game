import {computed, inject, Injectable, signal, WritableSignal} from '@angular/core';
import {RectangleComponent} from "../../../shared/components/rectangle/rectangle.component";
import {FaceToFaceAudioService} from "./face-to-face-audio.service";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountDownService {

  _currentIndex: WritableSignal<number> = signal(3);

  get currentIndex() {
    return this._currentIndex();
  }
  decrement(): number {
    this._currentIndex.update(v => --v);
    return this._currentIndex()
  }
  init() {
    this._currentIndex.set(3);
    return this._currentIndex()
  }

}
