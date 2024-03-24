import {IVideo, Video} from "../../../_core/models/types/video.model";
import {PATH_NAME} from "../../../_core/models/enums/path-name.enum";
import {InjectionToken} from "@angular/core";
import {PATH_SRC} from "../../../_core/models/enums/path-files.enum";
import {NAVIGATION_PATH as NAV} from "../../../_core/models/enums/path-navigation.enum";

export const VIDEO_PATH = new InjectionToken<IVideo>("path",
  {
    providedIn: "root",
    factory: () => new Video(PATH_NAME.GENERIC, PATH_SRC.INTRO, NAV.WINNING_POINT_INTRO)
  })
