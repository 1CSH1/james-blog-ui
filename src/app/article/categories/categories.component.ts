import { Component, OnInit } from '@angular/core';
import {Category} from "../../model/Category";
import {CategoriesService} from "./categories.service";
import {Router, ActivatedRoute} from "@angular/router";
import {HttpService} from "../common/http/http.service";

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories: Category[];

  constructor(private categoriesService: CategoriesService,
              private httpService: HttpService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getCategories();
  }

  /**
   * 获取所有的分类
   */
  getCategories() {
    this.httpService.doGet(
      "category",
      "categories",
    ).subscribe(
      response => {
        this.categories = response;
      },
      error => {
        console.error(error);
      }
    );
  }

}
