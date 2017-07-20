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
console.log(params);
        this.articleDetail.id = params["id"];
        this.getArticle();
    })
  }

  getArticle() {
    this.detailService.getArticle(this.articleDetail.id).subscribe(
      response => {
        this.articleDetail = response["data"];
console.log(this.articleDetail);
      },
      error => console.error(error)
    )
  }

}
