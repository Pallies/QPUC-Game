import {computed, inject, Injectable, signal} from '@angular/core';
import {filter, from, interval, Observable, of, take, zip} from "rxjs";
import {PATH_AUDIO} from "../../../_core/models/enums/path-audio.enum";
import {toObservable} from "@angular/core/rxjs-interop";
import {AudioService} from "../../../_core/services/audio.service";
import {WinningPointsService} from "../../../app/layouts/winning-points/winning-points.service";

@Injectable({
  providedIn: 'root'
})
export class DeskService {

  $audioService = inject(AudioService)

  counterEmpty: number[] = (Array.from({length: 9}).fill(0) as number[]);
  points$ = signal<number[]>(this.counterEmpty);
  winner$ = signal<string>('');
  isSound: boolean = true;
  isWinner$: Observable<boolean> = toObservable(computed(() => this.points$().reduce((a, b) => a + b) == 9));

  constructor(private winningPointService: WinningPointsService) {
    winningPointService.point$.subscribe(() => this.isSound = false);
    this.isWinner$.pipe(filter(v => v), take(1))
      .subscribe(() => {
        this.winningPointService.addWinner();
        this._qualified()
      })
  }

  rightAnswer(): void {
    this.$audioService.loadAudioFile(!this.isSound ? PATH_AUDIO.BUZZER : PATH_AUDIO.POINT_VALIDE)
      .then(a => a.start())
    this.isSound = !this.isSound;
    if (!this.isSound) {
      let point: number = this._pointToWin();
      let oldPoint: number[] = this.points$();
      // @ts-ignore
      zip(of(point, 0, point, 0, point), interval(250).pipe(take(5)), (value, _) => value)
        .subscribe(value => {
          let pointWin: number = point;
          let v = value ? this.points$.set(oldPoint.map(v => v || 0 < pointWin-- ? 1 : 0)) :
            this.points$.set(oldPoint);
        })
    }
  }

  private _qualified(): void {
    const tab: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let n: number = 1;
    this.$audioService.loadAudioFile(PATH_AUDIO.QUALIFIED).then(a => a.start())
    // @ts-ignore
    zip(from(tab.map(() => n++)), interval(125), (v, _) => v)
      .subscribe(n => {
        let _signal = n % 2 ? 'winner' : '';
        this.winner$.set(_signal);
      })
  }

  private _pointToWin(): number {
    let point: number = this.winningPointService.point$.getValue();
    this.winningPointService.point$.next(point == 3 ? 1 : point + 1);
    return point;
  }
}
