import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {SharedModule} from "../shared/shared.module";
import {articleRoutes} from "./article.routes";
import {DetailComponent} from "./detail/detail.component";
import {HomeComponent} from "./home/home.component";
import {CommentComponent} from "./comment/comment.component";
import {CommentViewComponent} from "./comment/view/comment-view.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpService} from "../common/service/http/http.service";

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(articleRoutes),
    SharedModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    DetailComponent,
    CommentComponent,
    CommentViewComponent
  ],
  providers: [
    HttpService
  ]
})
export class ArticleModule { }
