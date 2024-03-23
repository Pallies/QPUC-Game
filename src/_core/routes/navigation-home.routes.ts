import {Routes} from "@angular/router";
import {HomeComponent} from "../../app/containers/home/home.component";
import {SelectPlayersContainer} from "../../app/containers/home/select-players.container";
import {PATH_NAME as  PATH} from "src/_core/models/enums/path-name.enum";
import {GenericComponent} from "../../app/containers/home/generic.component";
export default [
  {
    path: PATH.EMPTY,
    component: HomeComponent
  },
  {
    path: PATH.GENERIQUE,
    component: GenericComponent
  },
  {
    path: PATH.SELECT_PLAYERS,
    component: SelectPlayersContainer
  }
] as Routes
;
