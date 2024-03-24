import { Component } from '@angular/core';
import {VIDEO_PATH} from "../../../shared/components/video/video.injection-token";
import {Video} from "../../../_core/models/types/video.model";
import {VideoComponent} from "../../../shared/components/video/video.component";
import {NAVIGATION_PATH as NAV} from "../../../_core/models/enums/path-navigation.enum";
import {PATH_SRC} from "../../../_core/models/enums/path-files.enum";

@Component({
  selector: 'qpuc-wp-intro',
  standalone: true,
  imports: [
    VideoComponent
  ],
  providers: [
    {
      provide: VIDEO_PATH,
      useValue: new Video(NAV.WINNING_POINT_INTRO , PATH_SRC.WINNING_POINT, NAV.WINNING_POINT)
    },
  ],
  template: `
    <qpuc-video/>
  `,
})
export class IntroWinningPointsComponent {

}
