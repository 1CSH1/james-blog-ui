import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {DetailComponent} from "./detail/detail.component";

export const articleRoutes: Routes = [
  {
    path: "",
    redirectTo: "page/1",
    pathMatch: "full"
  },
  {
    path: "page/:page",
    component: HomeComponent
  },
  {
    path: ":year/:month/:day/:title",
    component: DetailComponent
  }

  /*
  {
    path: "**",
    redirectTo: "page/1/"
  }
  */
];
