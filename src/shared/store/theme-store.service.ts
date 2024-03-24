import {Injectable} from '@angular/core';
import {THEME} from "../../_core/models/enums/theming.enum";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeStoreService {

  _themes = Object.values(THEME);
  _index = new BehaviorSubject(0);
  _themesChoice:BehaviorSubject<string[]> = new BehaviorSubject(['']);
  constructor() {
  }

  get themes() {
    return this._themes;
  }

  get index() {
    return this._index.getValue();
  }
  nextPlayer(theme:string){
    this._index.next(this._index.getValue()+1);
    this._themesChoice.next([...this._themesChoice.getValue(),theme])
    this.themes
  }
  isAlreadyChosen(theme:string):boolean{
    console.log(this._themesChoice.getValue())
    return this._themesChoice.getValue().includes(theme);
  }
}
