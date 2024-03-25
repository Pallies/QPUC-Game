import { Component } from '@angular/core';
import {FourSuccessionComponent} from "../../layouts/four-succession/four-succession.component";

@Component({
  selector: 'qpuc-four-succession-container',
  standalone: true,
  imports: [
    FourSuccessionComponent
  ],
  template: `
    <qpuc-four-succession/>
  `,
  styles: ``
})
export class FourSuccessionContainer {

}
