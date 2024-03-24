import { Component } from '@angular/core';
import {VideoComponent} from "../../../shared/components/video/video.component";
import {VIDEO_PATH} from "../../../shared/components/video/video.injection-token";
import {Video} from "../../../_core/models/types/video.model";
import {NAVIGATION_PATH as NAV} from "../../../_core/models/enums/path-navigation.enum";
import {PATH_SRC} from "../../../_core/models/enums/path-files.enum";

@Component({
  selector: 'qpuc-fs-intro',
  standalone: true,
  imports: [
    VideoComponent
  ],
  providers: [
    {
      provide: VIDEO_PATH,
      useValue: new Video(NAV.FOUR_SUCCESSION_INTRO , PATH_SRC.FOUR_SUCCESSION, NAV.FOUR_SUCCESSION_THEMES_START)
    },
  ],
  template: `
    <qpuc-video/>
  `,
  styles: ``
})
export class IntroFourSuccessionComponent {

}
