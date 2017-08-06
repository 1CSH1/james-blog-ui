import {Routes} from "@angular/router";
import {AboutComponent} from "./about.component";
/**
 * Created by jamescsh on 8/6/17.
 */
export const aboutRoutes: Routes = [
  {
    path: "",
    component: AboutComponent
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
]
