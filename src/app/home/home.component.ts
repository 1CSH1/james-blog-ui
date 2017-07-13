import {Component, OnInit} from '@angular/core';
import {Article} from "../model/Article";
import {HomeService} from "./home.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Page} from "../model/Page";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // 首页文章
  public articles: Article[];
  // 分页对象
  public page: Page;

  constructor(
    private homeService: HomeService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ){
  }

  ngOnInit(): void {
    this.page = new Page();
    this.page.pageNo = 0;
    this.page.pageSize = 0;
    this.page.isFirst = false;
    this.page.isLast = false;

    this.homeService.getArticles(this.page.pageSize, this.page.pageNo).subscribe(
      res => {
        this.articles = res['data'];
        this.page.pageSize = res['pageSize'];
        this.page.pageNo = res['pageNo'];
        this.page.isFirst = res['isFirst'];
        this.page.isLast = res['isLast'];

        console.log("articles: " + this.articles);
        console.log("pageSize: " + this.page.pageSize);
        console.log("pageNo: " + this.page.pageNo);
        console.log("isFirst: " + this.page.isFirst);
        console.log("isLast: " + this.page.isLast);
      },
      error => {
        console.log(error);
      }
    );
  }


}
