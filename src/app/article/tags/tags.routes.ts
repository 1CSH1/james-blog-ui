import {Routes} from "@angular/router";
import {TagsComponent} from "./tags.component";
import {TagComponent} from "./tag/tag.component";

/**
 * Created by jamescsh on 8/6/17.
 */
export const tagsRoutes: Routes = [
  {
    path: "",
    component: TagsComponent
  },
  {
    path: ":tag/:page",
    component: TagComponent
  },
  {
    path: "**",
    component: TagsComponent
  }
];
