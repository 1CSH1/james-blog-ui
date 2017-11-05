import { Component, OnInit } from '@angular/core';
import {Tag} from "../../model/Tag";
import {Router, ActivatedRoute} from "@angular/router";
import {HttpService} from "../../common/service/http/http.service";

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  public tags: Tag[];

  constructor(private httpService: HttpService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getTags();
  }

  /**
   * 获取所有标签
   */
  getTags() {
    this.httpService.doGet(
      "tag",
      "tags",
    ).subscribe(
      response => {
        this.tags = response;
        this.setFontAndSize();
      },
      error => {
        console.error(error);
      }
    );
  }

  private setFontAndSize() {
    let colors: string[]  = ['#ccc', '#bbb','#aaa', '#999','#888','#777','#666','#555','#444','#333','#222','#111'];
    let fonts: string[]  = ['20px', '21px','22px', '23px','24px','25px','26px','27px','28px','29px','30px','31px'];
    let num: number = 3;
    for (let i = 0; i < this.tags.length; i ++) {
      let s = Math.ceil(this.tags[i].total / num);
      if (s >= colors.length) {
        s = colors.length - 1;
      }
      if (s < 0) {
        s = 0;
      }
      console.log(s);
      console.log(colors[s]);
      console.log(fonts[s]);
      this.tags[i].color = colors[s];
      this.tags[i].font = fonts[s];
      this.tags[i].color = colors[i];
      this.tags[i].font = fonts[i];
    }
  }
}
