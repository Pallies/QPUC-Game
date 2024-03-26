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


  get themes() {
    return this._themes;
  }

  get index() {
    return this._index.getValue();
  }
  nextPlayer(){
    this._index.next(this._index.getValue()+1);
  }
  isAlreadyChosen(theme:string):boolean{
    return this._themesChoice.getValue().includes(theme);
  }

  selectedTheme(theme: string) {
    this._themesChoice.next([...this._themesChoice.getValue(),theme])
  }
}
