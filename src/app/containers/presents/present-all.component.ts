import {Component} from "@angular/core";
import {VideoComponent} from "../../../shared/components/video/video.component";
import {VIDEO_PATH} from "../../../shared/components/video/video.injection-token";
import {Video} from "../../../_core/models/types/video.model";
import {NAVIGATION_PATH as NAV} from "../../../_core/models/enums/path-navigation.enum";
import {PATH_SRC} from "../../../_core/models/enums/path-files.enum";

@Component({
  standalone: true,
  imports: [VideoComponent],
  providers: [
    {
      provide: VIDEO_PATH,
      useValue: new Video(NAV.PRESENT_ALL, PATH_SRC.PRESENT_ALL, NAV.FACE_TO_FACE_FINAL),
    }
  ],
  template: `
    <qpuc-video/>
  `,
})
export class PresentAllComponent {}
