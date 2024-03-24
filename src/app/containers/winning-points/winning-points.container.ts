import { Component } from '@angular/core';
import {WinningPointsComponent} from "../../layouts/winning-points/winning-points.component";

@Component({
  selector: 'qpuc-winning-points-container',
  standalone: true,
  imports: [
    WinningPointsComponent
  ],
  template: `
    <qpuc-winning-points/>
  `
})
export class WinningPointsContainer {

}
