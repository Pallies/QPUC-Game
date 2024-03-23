import {Component, computed, effect, inject, Input, Signal} from '@angular/core';
import {toSignal} from "@angular/core/rxjs-interop";
import {IUser} from "../../../_core/models/types/user.model";

@Component({
  selector: 'qpuc-desk',
  standalone: true,
  imports: [],
  templateUrl: './desk.component.html',
  styleUrl: './desk.component.scss'
})
export class DeskComponent {
  deskService: DeskService = inject(DeskService);
  winningPointService: WinningPointDeskService = inject(WinningPointDeskService);

  _winnerDesk: Signal<string> = computed(() => this.deskService.winner$())
  _isWinnerDesk: Signal<boolean|undefined>=toSignal(this.deskService.isWinner$.pipe(filter(v=>v),take(1)))
  _winnerAllDesk: Signal<boolean> = computed(() => this.winningPointService.deskWinning$() == 3);
  _isDisabled: Signal<boolean> = computed(() => this._winnerAllDesk() && this._winnerDesk() != 'winner')

  @Input() user!: IUser;

  constructor() {
    effect(()=> {
        if (this._isWinnerDesk()) {
          console.table(this.user)
          this.winningPointService.addPlayerWinner(this.user);
        }
      }
    )
  }

  winning() {
    if (this._winnerDesk() != 'winner')
      this.deskService.rightAnswer();
  }
}
