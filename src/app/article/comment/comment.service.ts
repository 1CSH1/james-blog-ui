import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

/**
 * Created by jamescsh on 7/17/17.
 */
@Injectable()
export class CommentService {

  private url: string = "assets/data/article.json"

  constructor(private http: Http) {
  }

}
