import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Article} from "../../model/Article";
import {DetailService} from "./detail.service";

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public articleDetail: Article = new Article();

  constructor(private detailService: DetailService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
console.log(params);
        let year = params["year"];
        let month = params["month"];
        let day = params["day"];
        let title = params["title"];
        let date = new Date(year, month - 1, day);
        this.getArticle(date, title);
console.log("日期" + date);
console.log("title: " + title);
    })
  }

  getArticle(date: Date, title: string) {
    this.detailService.getArticle(date, title).subscribe(
      response => {
console.log(response["data"]);
        this.articleDetail = response["data"];
console.log(this.articleDetail);
      },
      error => console.error(error)
    )
  }

}
