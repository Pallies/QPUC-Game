import {Routes} from '@angular/router';
import {Path_Name as Path} from "../_core/models/types/navigation-path";

export const routes: Routes = [
  {
    path: Path.EMPTY,
    redirectTo: Path.HOME,
    pathMatch: "full"
  },
  {
    path: Path.HOME,
    loadChildren: () => import('src/_core/routes/navigation-home.routes')
  }
];
