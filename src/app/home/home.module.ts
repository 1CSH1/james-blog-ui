import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";

import {homeRoutes} from "./home.routes";
import {HomeService} from "./home.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes),
    SharedModule,
    NgbModule.forRoot()
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
