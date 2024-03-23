import {Component, computed, effect, inject, OnInit, signal} from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import {MatButton} from "@angular/material/button";
import {IUser} from "../../../_core/models/types/user.model";
import {MatIcon} from "@angular/material/icon";
import {PlayerAll} from "../../../_core/models/types/player.model";
import {PlayerStoreService} from "../../../shared/store/player-store.service";
import {Router} from "@angular/router";
import {PATH_NAME} from "../../../_core/models/enums/path-name.enum";
import {NAVIGATION_PATH} from "../../../_core/models/enums/path-navigation.enum";

@Component({
  selector: 'qpuc-select-players',
  standalone: true,
  imports: [
    CdkDropList,
    MatButton,
    CdkDrag,
    MatIcon,
    CdkDropListGroup
  ],
  templateUrl: './select-players.component.html',
  styleUrl: './select-players.component.scss'
})
export class SelectPlayersComponent implements OnInit {
  protected readonly NAV = NAVIGATION_PATH;

  storeService = inject(PlayerStoreService);
  router = inject(Router);
  reserves$ = signal<IUser[]>([...PlayerAll]);
  players$ = signal<IUser[]>([]);

  ngOnInit(): void {
    this.storeService.init();

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
    this.storeService.save(this.players$());
    await this.router.navigate([this.NAV.HOME_GENERIC]);
  }

}
