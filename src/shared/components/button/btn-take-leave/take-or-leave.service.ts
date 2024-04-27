import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {AnimationManagementService} from "../../../../app/layouts/face-to-face/animation-management.service";
import {FaceToFaceAudioService} from "../../../../app/layouts/face-to-face/face-to-face-audio.service";

@Injectable()
export class TakeOrLeaveService {
  $animate = inject(AnimationManagementService)
$audio=inject(FaceToFaceAudioService)
  $takeOrLeave: WritableSignal<boolean | undefined> = signal(undefined)

  init() {
    this.$takeOrLeave.set(undefined);
  }

  takeOrLeave(leave: number = 0) {
    this.$audio.answer()
    this.$takeOrLeave.set(!!leave);
    this.$animate.takeOrLeavePlayer(leave)
  }

}
