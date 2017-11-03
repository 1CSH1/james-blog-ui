import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Article} from "../../model/Article";
import {DetailService} from "./detail.service";
import {HttpService} from "../common/http/http.service";

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public articleDetail: Article = new Article();

  constructor(private httpService: HttpService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
console.log(params);
        // let year = params["year"];
        // let month = params["month"];
        // let day = params["day"];
        let id = params["id"];
        // let subtitle = params["subtitle"];
        // let date = new Date(year, month - 1, day);
        this.getArticle(id);
// console.log("日期" + date);
// console.log("subtitle: " + subtitle);
    });
  }

  getArticle(id: number) {
    this.httpService.doGet(
      "article",
      "article/" + id
    ).subscribe(
      response => {
        this.articleDetail = response["article"];
        this.articleDetail.tags = response["tags"];
        this.articleDetail.categories = response["categories"];
        this.articleDetail.comments = response["comments"];
      },
      error => {
        console.error(error);
      }
    );
  }

}
