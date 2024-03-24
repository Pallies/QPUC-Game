import {inject, Injectable} from '@angular/core';

@Injectable()
export class AudioService {

  private audioContext: AudioContext;
  private audioBuffer!: AudioBuffer;
  constructor() {
    this.audioContext = new AudioContext();
  }

  async loadAudioFile(filePath: string): Promise<AudioBufferSourceNode> {
    const file=await fetch(filePath);
    const arrayBuffer = await file.arrayBuffer();
    this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
    const source = this.audioContext.createBufferSource();
    source.buffer = this.audioBuffer;
    source.connect(this.audioContext.destination);
    return source;
  }
}
