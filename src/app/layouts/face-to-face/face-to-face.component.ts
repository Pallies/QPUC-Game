import {Component, inject} from '@angular/core';
import {RectangleComponent} from "../../../shared/components/rectangle/rectangle.component";
import {PlayerCardComponent} from "../../../shared/components/player-card/player-card.component";
import {PlayerStoreService} from "../../../shared/store/player-store.service";

@Component({
  selector: 'qpuc-face-to-face',
  standalone: true,
  imports: [
    RectangleComponent,
    PlayerCardComponent
  ],
  templateUrl: './face-to-face.component.html',
  styleUrl: './face-to-face.component.scss'
})
export class FaceToFaceComponent {
  $storePlayers = inject(PlayerStoreService);
  players = this.$storePlayers.players;

}
