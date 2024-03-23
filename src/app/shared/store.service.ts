import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IUser} from "../../_core/models/types/user.model";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  protected _players = new BehaviorSubject<IUser[]>([])

  init():void{
    this._players.next([]);
  }

  save(players: IUser[]):void {
    this._players.next(players);
  }
}
