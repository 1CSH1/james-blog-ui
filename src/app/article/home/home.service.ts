import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
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

  constructor(public http: Http) {

  }

  // get the articles
  public getArticles(pageSize: number, pageNo: number): Observable<Article[]> {
    let params = new URLSearchParams();
    params.set("pageNo", pageNo.toString());
    params.set("pageSize", pageSize.toString());

    let homeUrl = "";
    if (pageNo == 1) {
      homeUrl = this.homeUrl1;
    } else if (pageNo == 2) {
      homeUrl = this.homeUrl2;
    } else {
      homeUrl = this.homeUrl3
    }
    return this.http
      .get(homeUrl, {search: params})
      .map(response => {
        let result = response.json();
        console.log(result);
        return result;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

}
