import { Component } from '@angular/core';
import {VideoComponent} from "../../../shared/components/video/video.component";

@Component({
  selector: 'qpuc-generic',
  standalone: true,
  imports: [
    VideoComponent
  ],
  template: `
    <qpuc-video/>
  `
})
export class GenericComponent {

}
