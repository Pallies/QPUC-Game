import { Component } from '@angular/core';
import {VideoComponent} from "../../../shared/components/video/video.component";
import {VIDEO_PATH} from "../../../shared/components/video/video.injection-token";
import {Video} from "../../../_core/models/types/video.model";
import {PATH_SRC as SRC} from "../../../_core/models/enums/path-files.enum";
import {NAVIGATION_PATH as NAV} from "../../../_core/models/enums/path-navigation.enum";

@Component({
  selector: 'qpuc-intro-face-to-face',
  standalone: true,
  imports: [
    VideoComponent
  ],providers:[
    {
      provide: VIDEO_PATH,
      useValue:new Video(NAV.FACE_TO_FACE_INTRO,SRC.FACE_TO_FACE,NAV.FACE_TO_FACE_FINAL)
    }
  ],
  template: `
    <qpuc-video></qpuc-video>
  `,
  styles: ``
})
export class IntroFaceToFaceComponent {

}
