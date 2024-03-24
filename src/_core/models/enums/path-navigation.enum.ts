import {PATH_NAME as PATH} from "./path-name.enum";

export enum NAVIGATION_PATH {
  HOME=`/${PATH.HOME}`,
  HOME_SELECT_PLAYERS=`/${PATH.HOME}/${PATH.SELECT_PLAYERS}`,
  HOME_GENERIC=`/${PATH.HOME}/${PATH.GENERIC}`,
  WINNING_POINT=`/${PATH.WINNING_POINTS}`,
  WINNING_POINT_INTRO=`/${PATH.WINNING_POINTS}/${PATH.INTRO}`,
  FOUR_SUCCESSION=`/${PATH.FOUR_SUCCESSION}`,
  FOUR_SUCCESSION_INTRO=`/${PATH.FOUR_SUCCESSION}/${PATH.INTRO}`,
  FOUR_SUCCESSION_THEMES=`/${PATH.FOUR_SUCCESSION}/${PATH.SELECTION_THEME}`,
  FOUR_SUCCESSION_THEMES_START=`/${PATH.FOUR_SUCCESSION}/${PATH.SELECTION_THEME}/0`,
}
