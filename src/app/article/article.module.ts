import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {SharedModule} from "../shared/shared.module";
import {articleRoutes} from "./article.routes";
import {DetailComponent} from "./detail/detail.component";
import {HomeService} from "./home/home.service";
import {HomeComponent} from "./home/home.component";
import {DetailService} from "./detail/detail.service";
import {CommentComponent} from "./comment/comment.component";
import {CommentService} from "./comment/comment.service";
import {CommentViewComponent} from "./comment/view/comment-view.component";

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(articleRoutes),
    SharedModule,
    NgbModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    DetailComponent,
    CommentComponent,
    CommentViewComponent
  ],
  providers: [
    HomeService,
    DetailService,
    CommentService
  ]
})
export class ArticleModule { }
