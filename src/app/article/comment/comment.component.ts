import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../model/Comment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpService} from "../../common/service/http/http.service";
import {ToastrService} from "ngx-toastr";

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
              private toastr: ToastrService,
              private httpService: HttpService,
              private router: Router){

  }

  ngOnInit(): void {
    this.buildForm();
  }

  getReplyComment(event) {
    this.replyComment = event;
    this.pid = this.replyComment.id;
    this.content = "[reply]" + this.replyComment.name + "[reply]\n";
    this.commentForm.value.content = this.content;
    this.toastr.info("评论成功", "提示");
    console.log("asdfadsf");
  }

  sendComment() {
    if (this.commentForm.valid) {
      this.comment = this.commentForm.value;
console.log(this.pid + " --- " + this.comment.nickname + " --- " + this.comment.email + " --- " + this.comment.content);
      if (this.comment.content.indexOf("[reply]") == -1) {
        // 删除了 [reply] 则设置父评论为空
        this.pid = 0;
      } else {
        let contentTemp = this.comment.content;
        contentTemp = contentTemp.substring(contentTemp.lastIndexOf("[reply]") + 7);
        console.log(contentTemp);
        this.comment.content = contentTemp;
      }
console.log(this.pid + " --- " + this.comment.nickname + " --- " + this.comment.email + " --- " + this.comment.content);

      // 截取 URL 获取文章 ID
      let articleId = this.router.url;
      articleId = articleId.substring(0, articleId.lastIndexOf('/'));
      articleId = articleId.substring(articleId.lastIndexOf('/') + 1);
      console.log(articleId);

      this.httpService.doGet(
        "comment",
        "article/" + articleId + "/add",
        {
          "pid": this.pid,
          "name": this.comment.nickname,
          "email": this.comment.email,
          "content": this.comment.content
        }
      ).subscribe(
        response => {
          this.toastr.info("评论成功", "提示");
          window.location.reload();
        },
        error => {
          this.formErrors.formError = error.message;
        }
      )

      // this.commentService.sendComment(this.comment)
      //   .subscribe(
      //     data => {
      //       this.router.navigateByUrl(this.router.url);
      //     },
      //     error => {
      //       this.formErrors.formError = error.message;
      //     }
      //   )
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
