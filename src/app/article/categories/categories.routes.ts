/**
 * Created by jamescsh on 8/6/17.
 */
import {Routes} from "@angular/router";
import {CategoriesComponent} from "./categories.component";
import {CategoryComponent} from "./category/category.component";

export const categoriesRoutes: Routes = [
  {
    path: "",
    component: CategoriesComponent
  },
  {
    path: ":category/:page",
    component: CategoryComponent
  },
  {
    path: "**",
    component: CategoriesComponent
  }
];
