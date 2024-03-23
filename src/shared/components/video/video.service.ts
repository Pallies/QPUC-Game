import {inject, Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {IVideo} from "../../../_core/models/types/video.model";
import {PATH_NAME} from "../../../_core/models/enums/path-name.enum";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  _video!: HTMLMediaElement;
  router=inject(Router);

  init(video: HTMLMediaElement, data: IVideo) {
    this._video = video;
    this._video.setAttribute("src", data.src);
    this.destroyConfig(data)
  }

  play() {
    this._video.play();
  }

  destroyConfig(data: IVideo) {
    this._video.onended = (e) => {
      if (data.routes!==PATH_NAME.GENERIQUE) {
        this._video.hidden = true;
        this.router.navigate([data.next])
      }
    };
  }
}
