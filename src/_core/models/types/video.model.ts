export interface IVideo {
  routes: string;
  src: string;
  next: string;
}

export class Video implements IVideo {
  routes: string;
  next: string;
  src: string;

  constructor(
    routes: any,
    src: any,
    next: any) {
    this.routes = routes.toString()
    this.src = src.toString()
    this.next = next.toString()
  }

}
