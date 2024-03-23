import {Component, ElementRef, inject, Inject, ViewChild} from '@angular/core';
import {VideoService} from "./video.service";
import {IVideo} from "../../../_core/models/types/video.model";
import {VIDEO_PATH} from "./video.injection-token";

@Component({
  selector: 'qpuc-video',
  standalone: true,
  imports: [],
  template: `
    <div class="center">
      <video #videoRef id="transition">
        <source [src]="src" type="video/mp4">
      </video>
    </div>
  `,
  styles: [`
    .center {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #transition {
      object-fit: contain;
    }`]
})
export class VideoComponent {
  src!: string;
  #video: VideoService = inject(VideoService)
  #videoPath:IVideo;
  constructor(@Inject(VIDEO_PATH) videoPath: IVideo) {
    this.#videoPath=videoPath;
  }
  @ViewChild('videoRef') set video(el: ElementRef) {
    if (el) {
      this.#video.init(el.nativeElement,this.#videoPath)
    }
  }

  ngAfterViewInit(): void {
    this.#video.play();
  }
}
