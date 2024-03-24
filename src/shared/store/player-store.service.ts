import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IUser} from "../../_core/models/types/user.model";
import {PlayerAll} from "../../_core/models/types/player.model";

@Injectable({
  providedIn: 'root'
})
export class PlayerStoreService {
  protected _players = new BehaviorSubject<IUser[]>(PlayerAll.slice(0,4))
  set playersStore(players: IUser[]) {
    this._players.next(players)
  }
  get playersStore(): IUser[]{
    return this._players.getValue();
  }
  init():void{
    this._players.next([]);
  }

  save(players: IUser[]):void {
    this._players.next(players);
  }
}
