import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Observable} from "rxjs/Observable";
import {Article} from "../../model/Article";

/**
 * Created by jamescsh on 7/10/17.
 */
@Injectable()
export class HomeService {

  private homeUrl1: string = "assets/data/articles1.json";
  private homeUrl2: string = "assets/data/articles2.json";
  private homeUrl3: string = "assets/data/articles3.json";
  private homeUrl: string = "http://localhost:5022/articles"


  constructor(public http: Http) {

  }

  // get the articles
  public getArticles(pageSize: number, pageNo: number): Observable<Article[]> {
    let params = new URLSearchParams();
    params.set("pageNo", pageNo.toString());
    params.set("pageSize", pageSize.toString());
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    let homeUrl = this.homeUrl;
    return this.http
      .post(homeUrl, {params}, options)
      .map(response => {
        let result = response.json();
        console.log(result);
        return result;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

}
