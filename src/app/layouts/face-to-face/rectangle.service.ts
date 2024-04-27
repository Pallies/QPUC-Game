import { Injectable} from "@angular/core";
import {RectangleComponent} from "../../../shared/components/rectangle/rectangle.component";


@Injectable({
  providedIn: 'root'
})
export class RectangleService {

  private _component: RectangleComponent[] = []


  setComponent(component: RectangleComponent) {
    this._component.push(component)
  }


  activate(index: number ) {
    if (index < 0) return
      this._component[index].active = true
  }

  stop(index:number) {
    this._component[index].active = false
  }

  init() {
    this._component
      .forEach(c => {
        c.active = undefined
      })
  }
}
