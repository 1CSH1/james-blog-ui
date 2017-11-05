import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Article} from "../../model/Article";
import {Page} from "../../model/Page";
import {HttpService} from "../../common/service/http/http.service";

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
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
console.log(params);
      this.page.pageNo = params['page'];
      this.getArticles()
    })

  }

  changePage(pageNo: number) {
    // 换页
    this.page.pageNo = pageNo;
    this.router.navigateByUrl("page/" + this.page.pageNo);
  }

  getArticles() {
    this.httpService.doGet("article", "articles",
      {
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
