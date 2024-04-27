import {Component, inject, OnInit} from '@angular/core';
import {FaceToFaceComponent} from "../../layouts/face-to-face/face-to-face.component";
import {PlayerStoreService} from "../../../shared/store/player-store.service";

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
export class FaceToFaceContainer implements OnInit {
  $players = inject(PlayerStoreService)


  ngOnInit(): void {
    this.$players.orderByScore();
  }
}
