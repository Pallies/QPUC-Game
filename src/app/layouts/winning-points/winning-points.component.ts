import {Component, inject, OnDestroy} from '@angular/core';
import {PlayerStoreService} from "../../../shared/store/player-store.service";
import {WinningPointsService} from "./winning-points.service";
import {DeskComponent} from "../../../shared/components/desk/desk.component";
import { MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {NAVIGATION_PATH} from "../../../_core/models/enums/path-navigation.enum";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {BtnNextComponent} from "../../../shared/components/button/btn-next/btn-next.component";

@Component({
  selector: 'qpuc-winning-points',
  standalone: true,
  imports: [
    DeskComponent,
    MatButtonModule,
    NgIf,
    MatIcon,
    RouterLink,
    BtnNextComponent
  ],providers:[WinningPointsService],
  templateUrl: './winning-points.component.html',
  styleUrl: './winning-points.component.scss'
})
export class WinningPointsComponent implements OnDestroy {
  $service = inject(WinningPointsService);
  $store = inject(PlayerStoreService);

  ngOnDestroy(): void {
    this.$store.playersStore = this.$service.playersWin;
  }

  protected readonly Nav = NAVIGATION_PATH;
}
