import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Article} from "../../../model/Article";
import {Page} from "../../../model/Page";
import {CategoryService} from "./category.service";
import {HttpService} from "../../common/http/http.service";

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  /**
   * 当前分类类型
   */
  public category: string;
  /**
   * 该分类下的文章
   */
  public articles: Article[];
  // 分页对象
  public page: Page = new Page();

  constructor(private categoryService: CategoryService,
              private httpService: HttpService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.category = params["category"];
      this.page.pageNo = params["page"];
console.log(this.category);
console.log(this.page.pageNo);
      this.getArticles();
    });
  }

  changePage(pageNo: number) {
    // 换页
    this.page.pageNo = pageNo;
    this.router.navigateByUrl("categories/" + this.category + "/" + this.page.pageNo);
  }

  getArticles() {
    this.httpService.doGet(
      "article",
      "/articles/category",
      {
        "categoryName": this.category,
        "pageNo": this.page.pageNo,
        "pageSize": this.page.pageSize
      }).subscribe(
      response => {
        this.articles = response['articles'];
        this.page.pageSize = response['pageSize'];
        this.page.pageNo = response['pageNo'];
        this.page.isFirst = response['isFirst'];
        this.page.isLast = response['isLast'];

console.log("articles: " + this.articles);
console.log("pageSize: " + this.page.pageSize);
console.log("pageNo: " + this.page.pageNo);
console.log("isFirst: " + this.page.isFirst);
console.log("isLast: " + this.page.isLast);
      },
      error => {
        console.log(error);
      }
    )
  }
}
