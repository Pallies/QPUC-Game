import {Routes} from "@angular/router";
import {PATH_NAME as PATH} from "../models/enums/path-name.enum";
import {IntroFaceToFaceComponent} from "../../app/containers/face-to-face/intro-face-to-face.component";
import {FaceToFaceContainer} from "../../app/containers/face-to-face/face-to-face.container";

export default [
  {
    path: PATH.EMPTY,
    component: FaceToFaceContainer
  },
  {
    path: PATH.INTRO,
    component: IntroFaceToFaceComponent
  },
  {
    path: PATH.FINAL,
    component: FaceToFaceContainer
  },

] as Routes;
