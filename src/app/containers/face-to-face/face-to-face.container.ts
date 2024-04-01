import { Component } from '@angular/core';
import {FaceToFaceComponent} from "../../layouts/face-to-face/face-to-face.component";

@Component({
  selector: 'qpuc-face-to-face.container',
  standalone: true,
  imports: [
    FaceToFaceComponent
  ],
  template: `
    <qpuc-face-to-face/>
  `,
  styles: ``
})
export class FaceToFaceContainer {

}
