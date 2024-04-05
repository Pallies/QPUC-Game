import {
  AfterViewInit,
  Component,
  computed,
  inject,
  QueryList,
  Signal,
  ViewChildren,
  WritableSignal
} from '@angular/core';
import {RectangleComponent} from "../../../shared/components/rectangle/rectangle.component";
import {PlayerCardComponent} from "../../../shared/components/player-card/player-card.component";
import {PlayerStoreService} from "../../../shared/store/player-store.service";
import {MatButtonModule} from "@angular/material/button";
import {CountDownService} from "./count-down.service";
import {FaceToFaceAudioService} from "./face-to-face-audio.service";


@Component({
  selector: 'qpuc-face-to-face',
  standalone: true,
  imports: [
    RectangleComponent,
    PlayerCardComponent,
    MatButtonModule
  ],
  providers: [CountDownService],
  templateUrl: './face-to-face.component.html',
  styleUrl: './face-to-face.component.scss'
})
export class FaceToFaceComponent implements AfterViewInit {
  $storePlayers = inject(PlayerStoreService);
  $countDown = inject(CountDownService);
  players = this.$storePlayers.players;
  buttonName: Signal<string> = computed(() => this.$countDown._starter() ? "Stop":"Commencez" )

  @ViewChildren('rectangle') rectangles!: QueryList<RectangleComponent>

  pursuit(index: number) {
    this.$countDown.currentIndexDecrement(index)
  }

  ngAfterViewInit(): void {
    this.rectangles?.forEach(el => this.$countDown.setComponent(el));
  }

  start() {
    this.$countDown.start()
  }
}
