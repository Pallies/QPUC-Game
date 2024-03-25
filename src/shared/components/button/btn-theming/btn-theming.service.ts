import {inject, Injectable} from '@angular/core';
import {AudioService} from "../../../../_core/services/audio.service";
import {PATH_AUDIO} from "../../../../_core/models/enums/path-audio.enum";

@Injectable({
  providedIn: 'root'
})
export class BtnThemingService {

  $audio=inject(AudioService);


  selectedTheme(){
    this.$audio.loadAudioFile(PATH_AUDIO.POINT_VALIDE).then(a => a.start())
  }
}
