import {Routes} from '@angular/router';
import { PATH_NAME as PATH} from 'src/_core/models/enums/path-name.enum';

export const routes: Routes = [
  {
    path: PATH.EMPTY,
    redirectTo: PATH.HOME,
    pathMatch: "full"
  },
  {
    path: PATH.HOME,
    loadChildren: () => import('src/_core/routes/navigation-home.routes')
  },
  {
    path: PATH.WINNING_POINTS,
    loadChildren: () => import('src/_core/routes/navigation-winning-point.routes')
  }, {
    path: PATH.FOUR_SUCCESSION,
    loadChildren: () => import('src/_core/routes/navigation-four-succession.routes')
  },
  {
    path:PATH.FACE_TO_FACE,
    loadChildren:()=> import('src/_core/routes/navigation-face-to-face.routes')
  },
  {
    path:PATH.PRESENTS,
    loadChildren:()=> import('src/_core/routes/navigation-presents.routes')
  },
  {
    path: '**',
    redirectTo: PATH.HOME,
    pathMatch: "full"
  },
];
