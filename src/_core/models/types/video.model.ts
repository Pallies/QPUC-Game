export interface IVideo {
  routes: string;
  src: string;
  next: string;
}


export class Video implements IVideo {

  constructor(
    public routes: string,
    public src: string,
    public next: string) {
  }
}
