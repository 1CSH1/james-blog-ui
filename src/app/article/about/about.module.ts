import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutComponent} from "./about.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {aboutRoutes} from "./about.routes";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RouterModule.forChild(aboutRoutes)
  ],
  declarations: [
    AboutComponent
  ],
  providers: [
  ]
})
export class AboutModule { }
