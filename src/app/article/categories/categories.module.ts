/**
 * Created by jamescsh on 8/6/17.
 */
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CategoryComponent } from './category/category.component';
import {categoriesRoutes} from "./categories.routes";
import {SharedModule} from "../../shared/shared.module";
import {CategoriesComponent} from "./categories.component";


@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(categoriesRoutes),
    SharedModule,
    NgbModule.forRoot()
  ],
  declarations: [
    CategoriesComponent,
    CategoryComponent
  ],
  providers: [
  ]
})
export class CategoriesModule { }
