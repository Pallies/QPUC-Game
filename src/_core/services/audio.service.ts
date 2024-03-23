import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private audioContext: AudioContext;

  constructor(private http: HttpClient) {
    this.audioContext = new AudioContext();
  }


  async loadAudioFile(filePath: string): Promise<AudioBufferSourceNode> {
    const source = this.audioContext.createBufferSource();
    const arrayBuffer = await firstValueFrom(this.http.get(filePath, {responseType: 'arraybuffer'}));
    source.buffer = await this.audioContext.decodeAudioData(arrayBuffer);
    source.connect(this.audioContext.destination);
    return source;
  }

}
