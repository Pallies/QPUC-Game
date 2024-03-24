import {Routes} from "@angular/router";
import {PATH_NAME as PATH} from "../models/enums/path-name.enum";
import {FourSuccessionContainer} from "../../app/containers/four-succession/four-succession.container";
import {IntroFourSuccessionComponent} from "../../app/containers/four-succession/intro-four-succession.component";
import {ThemeFourSuccessionComponent} from "../../app/containers/four-succession/theme-four-succession.component";

export default [
  {
    path:PATH.EMPTY,
    component:FourSuccessionContainer
  },
  {
    path:PATH.INTRO,
    component:IntroFourSuccessionComponent
  },
  {
    path:PATH.SELECTION_THEME+'/:id',
    component:ThemeFourSuccessionComponent
  }
]as Routes;
