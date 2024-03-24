import {Routes} from "@angular/router";
import {PATH_NAME as PATH} from "../models/enums/path-name.enum";
import {IntroWinningPointsComponent} from "../../app/containers/winning-points/intro-winning-points.component";
import {WinningPointsContainer} from "../../app/containers/winning-points/winning-points.container";

export default [
  {
    path:PATH.EMPTY,
    component:WinningPointsContainer
  },
  {
    path:PATH.INTRO,
    component:IntroWinningPointsComponent
  }
]as Routes;
