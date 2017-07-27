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
  @Input()
  public comment: Comment;

  ngOnInit(): void {
  }
}
