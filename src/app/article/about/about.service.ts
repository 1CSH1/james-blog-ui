import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {About} from "../../model/About";
import {Injectable} from "@angular/core";
/**
 * Created by jamescsh on 8/6/17.
 */
@Injectable()
export class AboutService {
  constructor(private http: Http) {

  }

  public getAbout(): Observable<About>{
    let params = new URLSearchParams();
    return this.http
      .get("assets/data/about.json", {search: params})
      .map(response => {
        let result = response.json();
        return result;
      })
      .catch((error: any) => Observable.throw(error || "Server error"));
  }
}
