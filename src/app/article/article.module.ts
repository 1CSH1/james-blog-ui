import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {SharedModule} from "../shared/shared.module";
import {articleRoutes} from "./article.routes";
import {ArticleComponent} from "./article.component";
import {DetailComponent} from "./detail/detail.component";
import {HomeService} from "./home/home.service";
import {HomeComponent} from "./home/home.component";
import {DetailService} from "./detail/detail.service";

@NgModule({
  imports: [
    RouterModule.forChild(articleRoutes),
    SharedModule,
    NgbModule.forRoot()
  ],
  declarations: [
    ArticleComponent,
    HomeComponent,
    DetailComponent
  ],
  providers: [
    HomeService,
    DetailService
  ]
})
export class ArticleModule { }
