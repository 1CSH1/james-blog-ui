import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Comment} from "../../model/Comment";
import {Observable} from "rxjs/Observable";

/**
 * Created by jamescsh on 7/17/17.
 */
@Injectable()
export class CommentService {

  private url: string = "assets/data/article.json"

  constructor(private http: Http) {
  }

  public sendComment(comment: Comment) {
    let params = new URLSearchParams();

    return this.http
      .get(this.url, {search: params})
      .map(response => {
        return response.json();
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
}
