import {Routes} from "@angular/router";
import {PATH_NAME as PATH} from "../models/enums/path-name.enum";
import {IntroWinningPointsComponent} from "../../app/containers/winning-points/intro-winning-points.component";

export default [
  {
    path:PATH.EMPTY,
    component:IntroWinningPointsComponent
  },
  {
    path:PATH.INTRO,
    component:IntroWinningPointsComponent
  }
]as Routes;
