import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../model/Comment";

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  public comments: Comment[];

  // 要回复的评论
  public replyComment: Comment = new Comment();

  public id: number = 0;
  public content: string = "";
  public email: string = "";
  public name: string = "";

  ngOnInit(): void {
  }

  getReplyComment(event) {
    this.replyComment = event;
    this.id = this.replyComment.id;
    this.content = "[reply]" + this.replyComment.username + "[reply]\n";
  }

  submit() {
    alert(this.email + " --- " + this.name + " --- " + this.content);
  }
}
