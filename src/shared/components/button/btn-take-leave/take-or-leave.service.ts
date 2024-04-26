import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {AnimationManagementService} from "../../../../app/layouts/face-to-face/animation-management.service";

@Injectable()
export class TakeOrLeaveService {
  $animate = inject(AnimationManagementService)

  $takeOrLeave: WritableSignal<boolean | undefined> = signal(undefined)

  init() {
    this.$takeOrLeave.set(undefined);
  }

  takeOrLeave(leave: number = 0) {
    this.$takeOrLeave.set(!!leave);
    this.$animate.takeOrLeavePlayer(leave)
  }

}
