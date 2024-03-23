import {IVideo, Video} from "../../../_core/models/types/video.model";
import {PATH_NAME} from "../../../_core/models/enums/path-name.enum";
import {InjectionToken} from "@angular/core";
import {PATH_SRC} from "../../../_core/models/enums/path-files";

export const VIDEO_PATH = new InjectionToken<IVideo>("path",
  {
    providedIn: "root",
    factory: () => new Video(PATH_NAME.INTRO, PATH_SRC.INTRO, PATH_NAME.EMPTY)
  })
