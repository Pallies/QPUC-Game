import {Routes} from "@angular/router";
import {PATH_NAME as PATH} from "../models/enums/path-name.enum";
import {PresentOneComponent} from "../../app/containers/presents/present-one.component";
import {PresentTwoComponent} from "../../app/containers/presents/present-two.component";
import {PresentThreeComponent} from "../../app/containers/presents/present-three.component";
import {PresentFourComponent} from "../../app/containers/presents/present-four.component";
import {PresentAllComponent} from "../../app/containers/presents/present-all.component";

export default [
  {
    path: PATH.PRESENT_ONE,
    component: PresentOneComponent
  },
  {
    path: PATH.PRESENT_TWO,
    component: PresentTwoComponent
  },
  {
    path: PATH.PRESENT_THREE,
    component: PresentThreeComponent
  },
  {
    path: PATH.PRESENT_FOUR,
    component: PresentFourComponent
  },
  {
    path: PATH.PRESENT_ALL,
    component: PresentAllComponent
  },
] as Routes;
