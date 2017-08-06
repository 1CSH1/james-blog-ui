import { Component, OnInit } from '@angular/core';
import {Tag} from "../../model/Tag";
import {TagsService} from "./tags.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  public tags: Tag[];

  constructor(private tagsService: TagsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getTags();
  }

  /**
   * 获取所有标签
   */
  getTags() {
    this.tagsService.getAllTag().subscribe(response => {
      this.tags = response["data"];
    });
  }

}
