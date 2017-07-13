import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";

export const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./home/home.module#HomeModule"
  },
  {
    path: "**",
    component: AppComponent
  }
]
