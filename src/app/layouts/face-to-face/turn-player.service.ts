import {Injectable, signal, WritableSignal} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TurnPlayerService {

  _turn$: WritableSignal<number> = signal(1);

  get turn$() {
    return this._turn$();
  }

  nextTurn() {
    this._turn$.update(v => ++v);
  }

  isTurnPlayerOne() {
    return !this._pair();
  }

  isTurnPlayerTwo() {
    return this._pair();
  }

  private _pair(): boolean {
    return (this._turn$() % 2) === 0;
  }
}
