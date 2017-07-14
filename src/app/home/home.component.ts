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

  changePage(num: number) {
    if (0 == num) {
      // 上一页
      this.page.pageNo = this.page.pageNo - 1;
    } else {
      // 下一页
      this.page.pageNo = this.page.pageNo + 1;
    }
    // this.getArticles();
    this.router.navigateByUrl("page/" + this.page.pageNo);
  }

  getArticles() {
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
