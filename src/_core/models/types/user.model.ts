export interface IUser {
  name: string;
  nickname: string;
  avatarUrl: string;
  src:string;
  score: number;
  theme:string;
  objectPosition: string;
}

export class User implements IUser {
  name: string;
  nickname: string;
  avatarUrl: string;
  src:string;
  score: number;
  theme:string;
  objectPosition = '0';

  constructor(name: string, nickname: string, avatarUrl: string,theme:string,position='0') {
    this.name = name;
    this.nickname = nickname;
    this.avatarUrl = `url(${avatarUrl})`;
    this.src = `${avatarUrl}`;
    this.score=0;
    this.theme=theme;
    this.objectPosition = position;
  }

}
