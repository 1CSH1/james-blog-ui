/**
 * Created by jamescsh on 8/6/17.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Tag} from "../../model/Tag";
@Injectable()
export class TagsService {
  constructor(private http: Http) {
  }

  public getAllTag(): Observable<Tag[]>{
    let params = new URLSearchParams();
    return this.http
      .get("assets/data/tags.json", {search: params})
      .map(response => {
        let result = response.json();
        return result;
      })
      .catch((error: any) => Observable.throw(error || "Server error"));
  }
}
