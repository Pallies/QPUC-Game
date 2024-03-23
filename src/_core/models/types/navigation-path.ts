

export enum Path_Name{
  EMPTY='',
  HOME='accueil',
  INTRO='intro',
  SELECT_PLAYERS='choix-joueurs',
}
export enum NavigationPath {
  HOME=`${Path_Name.HOME}`,
  HOME_SELECT_PLAYERS=`${Path_Name.HOME}/${Path_Name.SELECT_PLAYERS}`,
  HOME_INTRO=`${Path_Name.HOME}/${Path_Name.INTRO}`
}
