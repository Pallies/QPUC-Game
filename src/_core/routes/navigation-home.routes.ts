import {Routes} from "@angular/router";
import {HomeComponent} from "../../app/containers/home/home.component";
import {SelectPlayersComponent} from "../../app/containers/home/select-players.component";
import {Path_Name as  Path} from "../models/types/navigation-path";
export default [
  {
    path: Path.EMPTY,
    component: HomeComponent
  },
  {
    path: Path.INTRO,
    component: HomeComponent
  },
  {
    path: Path.SELECT_PLAYERS,
    component: SelectPlayersComponent
  }
] as Routes
;
