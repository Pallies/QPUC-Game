import {Routes} from '@angular/router';
import {PATH_NAME as Path } from '_core/models/enums/path-name.enum';

export const routes: Routes = [
  {
    path: Path.EMPTY,
    redirectTo: Path.HOME,
    pathMatch: "full"
  },
  {
    path: Path.HOME,
    loadChildren: () => import('_core/routes/navigation-home.routes')
  }
];
