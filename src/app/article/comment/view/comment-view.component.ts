import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Comment} from "../../../model/Comment";

@Component({
  selector: 'comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css']
})
export class CommentViewComponent implements OnInit {
  @Input()
  public comments: Comment[];

  ngOnInit(): void {
  }
}
