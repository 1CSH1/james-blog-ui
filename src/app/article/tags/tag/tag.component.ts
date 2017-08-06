import { Component, OnInit } from '@angular/core';
import {Article} from "../../../model/Article";
import {Page} from "../../../model/Page";
import {TagService} from "./tag.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  /**
   * 当前分类类型
   */
  public tag: string;
  /**
   * 该分类下的文章
   */
  public articles: Article[];
  // 分页对象
  public page: Page = new Page();

  constructor(private tagService: TagService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.tag = params["tag"];
      this.page.pageNo = params["page"];
console.log(this.tag);
console.log(this.page.pageNo);
      this.getArticles();
    });
  }

  changePage(pageNo: number) {
    // 换页
    this.page.pageNo = pageNo;
    this.router.navigateByUrl("tags/" + this.tag + "/" + this.page.pageNo);
  }

  getArticles() {
    // 获取某分类某一页的文章
    this.tagService.getArticles(this.tag, this.page.pageSize, this.page.pageNo).subscribe(
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
