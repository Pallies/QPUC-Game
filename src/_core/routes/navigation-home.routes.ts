import {Routes} from "@angular/router";
import {HomeComponent} from "../../app/containers/home/home.component";
import {SelectPlayersContainer} from "../../app/containers/home/select-players.container";
import {PATH_NAME as  PATH} from "_core/models/enums/path-name.enum";
export default [
  {
    path: PATH.EMPTY,
    component: HomeComponent
  },
  {
    path: PATH.INTRO,
    component: HomeComponent
  },
  {
    path: PATH.SELECT_PLAYERS,
    component: SelectPlayersContainer
  }
] as Routes
;
