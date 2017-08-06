import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../model/Comment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommentService} from "./comment.service";
import {Router} from "@angular/router";

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

  public pid: number = 0;
  public content: string = "";
  public email: string = "";
  public name: string = "";

  public commentForm: FormGroup;
  public comment: Comment = new Comment();

  constructor(private formBuilder: FormBuilder,
              private commentService: CommentService,
              private router: Router){

  }

  ngOnInit(): void {
    this.buildForm();
  }

  getReplyComment(event) {
    this.replyComment = event;
    this.pid = this.replyComment.id;
    this.content = "[reply]" + this.replyComment.username + "[reply]\n";
     this.commentForm.value.content = this.content;
  }

  sendComment() {
    if (this.commentForm.valid) {
      this.comment = this.commentForm.value;
console.log(this.pid + " --- " + this.comment.nickname + " --- " + this.comment.email + " --- " + this.comment.content);
      this.commentService.sendComment(this.comment)
        .subscribe(
          data => {
            this.router.navigateByUrl(this.router.url);
          },
          error => {
            this.formErrors.formError = error.message;
          }
        )
    } else {
      this.formErrors.formError = "存在不合法的输入项，请检查。";
    }
  }

  /* validate */

  public formErrors = {
    "nickname": "",
    "email": "",
    "content": "",
    "formError": ""
  }

  public validationMessages = {
    "nickname": {
      "required": "昵称不能为空",
    },
    "email": {
      "required": "邮箱不能为空",
      "pattern": "请输入正确的邮箱地址"
    },
    "content": {
      "required": "内容不能为空"
    }
  }

  private buildForm() {
    this.commentForm = this.formBuilder.group({
      "nickname":[
        this.comment.nickname,
        [
          Validators.required
        ]
      ],
      "email": [
        this.comment.email,
        [
          Validators.required,
          Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
        ]
      ],
      "content": [
        this.comment.content,
        [
          Validators.required
        ]
      ]
    });
    this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) {
      return;
    }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }

  }
}
