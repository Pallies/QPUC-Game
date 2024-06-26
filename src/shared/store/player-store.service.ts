import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IUser} from "../../_core/models/types/user.model";
import {PlayerAll} from "../../_core/models/types/player.model";

@Injectable({
  providedIn: 'root'
})
export class PlayerStoreService {
  protected _players = new BehaviorSubject<IUser[]>(PlayerAll.slice(0,4))
  set players(players: IUser[]) {
    this._players.next(players)
  }
  get players(): IUser[]{
    return this._players.getValue();
  }
  init():void{
    this._players.next([]);
  }

  save(players: IUser[]):void {
    this._players.next(players);
  }
  orderByScore():IUser[]{
    return this.players.sort((a,b) => b.score - a.score);
  }
}
