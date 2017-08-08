import {Routes} from "@angular/router";

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
