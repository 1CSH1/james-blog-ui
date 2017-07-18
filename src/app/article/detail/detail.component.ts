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
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      params => {
        let year = params["year"];
        let month = params["month"];
        let day = params["day"];
        let title = params["title"];

        let id = params["id"];
console.log("id------------------" + id);

        this.articleDetail.time = new Date(year, month, day);
        this.articleDetail.title = title;
        this.getArticle();
    })
  }

  getArticle() {
    this.detailService.getArticle(this.articleDetail.time, this.articleDetail.title).subscribe(
      response => {
        this.articleDetail = response["data"];
console.log(this.articleDetail);
      },
      error => console.error(error)
    )
  }

}
