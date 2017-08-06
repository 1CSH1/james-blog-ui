import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import { TagComponent } from './tag/tag.component';
import {SharedModule} from "../../shared/shared.module";
import {Route, RouterModule} from "@angular/router";
import {tagsRoutes} from "./tags.routes";
import {TagsService} from "./tags.service";
import {TagService} from "./tag/tag.service";

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(tagsRoutes),
    SharedModule
  ],
  declarations: [
    TagsComponent,
    TagComponent
  ],
  providers: [
    TagsService,
    TagService
  ]
})
export class TagsModule { }
