import {inject, Injectable, signal} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IUser} from "../../../_core/models/types/user.model";
import {PlayerStoreService} from "../../../shared/store/player-store.service";

@Injectable({
  providedIn: 'platform'
})
export class WinningPointsService {

  $store = inject(PlayerStoreService)
  point$: BehaviorSubject<number> = new BehaviorSubject(1);
  deskWinning$ = signal<number>(0);

  players: IUser[] = this.$store.playersStore;
  playersWin: IUser[] = [];


  addWinner() {
    this.deskWinning$.update(v => v + 1);
  }

  addPlayerWinner(user: IUser) {
    this.playersWin.push(user)
    if (this.playersWin.length == 3) {
      const last: IUser = this.players.filter(u => !this.playersWin.includes(u))[0];
      this.playersWin.push(last)
    }
  }
}
