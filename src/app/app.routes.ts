import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";

export const appRoutes: Routes = [
  {
    path: "",
    loadChildren: "./article/article.module#ArticleModule"
  },
  {
    path: "**",
    loadChildren: "./article/article.module#ArticleModule"
  }
]
