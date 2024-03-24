import {Component, computed, effect, inject, OnInit, signal} from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { MatButtonModule} from "@angular/material/button";
import {IUser} from "../../../_core/models/types/user.model";
import {MatIconModule} from "@angular/material/icon";
import {PlayerAll} from "../../../_core/models/types/player.model";
import {PlayerStoreService} from "../../../shared/store/player-store.service";
import {Router} from "@angular/router";
import {NAVIGATION_PATH} from "../../../_core/models/enums/path-navigation.enum";

@Component({
  selector: 'qpuc-select-players',
  standalone: true,
  imports: [
    CdkDropList,
    MatButtonModule,
    CdkDrag,
    MatIconModule,
    CdkDropListGroup
  ],
  templateUrl: './select-players.component.html',
  styleUrl: './select-players.component.scss'
})
export class SelectPlayersComponent implements OnInit {
  protected readonly NAV = NAVIGATION_PATH;

  $storePlayers = inject(PlayerStoreService);
  $router = inject(Router);
  reserves$ = signal<IUser[]>([...PlayerAll]);
  players$ = signal<IUser[]>([]);

  ngOnInit(): void {
    this.$storePlayers.init();

  }

  drop(event: CdkDragDrop<IUser[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  async savePlayer() {
    this.$storePlayers.save(this.players$());
    await this.$router.navigate([this.NAV.HOME_GENERIC]);
  }

}
