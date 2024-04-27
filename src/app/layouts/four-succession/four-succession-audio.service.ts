import {inject, Injectable} from '@angular/core';
import {PATH_AUDIO as AUDIO} from "../../../_core/models/enums/path-audio.enum";
import {AudioService} from "../../../_core/services/audio.service";

@Injectable({
  providedIn: 'root'
})
export class FourSuccessionAudioService {

  audioCount!: AudioBufferSourceNode;
  $audio = inject(AudioService)

  rightAnswer(): void {
    this.$audio.loadAudioFile(AUDIO.POINT_VALIDE)
      .then(a => a.start())
  }
falseAnswer(): void {
  this.$audio.loadAudioFile(AUDIO.FALSE_ANSWER)
    .then(a=>a.start())
}
  qualified(): void {
    this.$audio.loadAudioFile(AUDIO.QUALIFIED)
      .then(a => a.start())
  }

  start(): void {
    this.$audio.loadAudioFile(AUDIO.DECREMENT)
      .then(a => {
        this.audioCount = a;
        this.audioCount.start()
      })

  }

  stop(): void {
    this.audioCount.stop()
  }
}
