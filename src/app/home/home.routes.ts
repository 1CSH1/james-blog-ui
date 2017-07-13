import {Routes} from "@angular/router";
import {HomeComponent} from "./home.component";

export const homeRoutes: Routes = [
  {
    path: "",
    redirectTo: "page/1",
    pathMatch: "full"
  },
  {
    path: "page/:page",
    component: HomeComponent
  }
];
