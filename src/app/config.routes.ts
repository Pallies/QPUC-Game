import {Routes} from '@angular/router';
import {PATH_NAME as Path} from 'src/_core/models/enums/path-name.enum';

export const routes: Routes = [
  {
    path: Path.EMPTY,
    redirectTo: Path.HOME,
    pathMatch: "full"
  },
  {
    path: Path.HOME,
    loadChildren: () => import('src/_core/routes/navigation-home.routes')
  },
  {
    path: Path.WINNING_POINTS,
    loadChildren: () => import('src/_core/routes/navigation-winning-point.routes')
  }
];
