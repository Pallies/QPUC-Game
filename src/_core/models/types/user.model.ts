export interface IUser {
  name: string;
  nickname: string;
  avatarUrl: string;
  src:string;
  score: number;
  theme:string;
}

export class User implements IUser {
  name: string;
  nickname: string;
  avatarUrl: string;
  src:string;
  score: number;
  theme:string;

  constructor(name: string, nickname: string, avatarUrl: string,theme:any) {
    this.name = name;
    this.nickname = nickname;
    this.avatarUrl = `url(${avatarUrl})`;
    this.src = `${avatarUrl}`;
    this.score=0;
    this.theme=theme
  }

}
