import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TurnPlayerService {

  _turn$: BehaviorSubject<number> =  new BehaviorSubject(1);
  _end$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  get turn$(): number {
    return this._turn$.getValue();
  }
  get isEnd(): boolean {
    return this._end$.getValue();
  }

  nextTurn() {
    this._turn$.next(this._turn$.getValue()+1);
    this._end$.next(this._turn$.getValue() >= 17);
  }

  isTurnPlayerOne() {
    return !this._pair();
  }

  isTurnPlayerTwo() {
    return this._pair();
  }

  private _pair(): boolean {
    return (this._turn$.getValue() % 2) === 0;
  }
}
