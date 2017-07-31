import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Comment} from "../../../model/Comment";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css']
})
export class CommentViewComponent implements OnInit {
  @Input()
  public comments: Comment[];
  // 点击回复时返回数据
  @Output()
  public contentEvent: EventEmitter<Comment> = new EventEmitter<Comment>();
  // 用于跳转到回复输入框的url拼接
  public url: string = "";

  constructor(private router: Router,
              private activateRoute: ActivatedRoute ) {
  }

  ngOnInit(): void {
    this.url = this.router.url;
    this.url = this.url.split("#")[0];
    this.url = this.url + "#comment";
  }

  reply(comment: Comment) {
    this.contentEvent.emit(comment);
  }

  transferToParent(event) {
    this.contentEvent.emit(event);
  }

}

