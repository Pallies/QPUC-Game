import { Component } from '@angular/core';
import {SelectPlayersComponent} from "../../layouts/select-players/select-players.component";

@Component({
  selector: 'qpuc-select-players-container',
  standalone: true,
  imports: [
    SelectPlayersComponent,
  ],
  template: `
    <qpuc-select-players/>
  `
})
export class SelectPlayersContainer {

}
