export interface IUser {
  name: string;
  nickname: string;
  avatarUrl: string;
  src:string;
  score: number;
}

export class User implements IUser {
  name: string;
  nickname: string;
  avatarUrl: string;
  src:string;
  score: number;


  constructor(name: string, nickname: string, avatarUrl: string) {
    this.name = name;
    this.nickname = nickname;
    this.avatarUrl = `url(${avatarUrl})`;
    this.src = `${avatarUrl}`;
    this.score=0;
  }

}
