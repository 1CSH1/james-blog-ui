import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Article} from "../../model/Article";
import {Observable} from "rxjs/Observable";

/**
 * Created by jamescsh on 7/17/17.
 */
@Injectable()
export class DetailService {

  private url: string = "assets/data/article.json"

  constructor(private http: Http) {
  }

  public getArticle(id: number): Observable<Article> {
    let params = new URLSearchParams();
    params.set("id", id.toString());

    return this.http
      .get(this.url, {search: params})
      .map(response => {
        return response.json();
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

}
