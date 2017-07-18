import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Article} from "../../model/Article";
import {Page} from "../../model/Page";
import {HomeService} from "./home.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // 首页文章
  public articles: Article[];
  // 分页对象
  public page: Page = new Page();

  constructor(
    private homeService: HomeService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ){
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
console.log(params);
      this.page.pageNo = params['page'];
      this.getArticles()
    })

  }

  changePage(pageNo: number) {
    this.page.pageNo = pageNo;
    this.router.navigateByUrl("page/" + this.page.pageNo + "/");
  }

  getArticles() {
    this.homeService.getArticles(this.page.pageSize, this.page.pageNo).subscribe(
      response => {
        this.articles = response['data'];
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
    );
  }
}
