import { Component } from '@angular/core';
import {SelectPlayersComponent} from "../../layouts/select-players/select-players.component";

@Component({
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
