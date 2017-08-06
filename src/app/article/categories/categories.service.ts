import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Category} from "app/model/Category";
/**
 * Created by jamescsh on 8/6/17.
 */
@Injectable()
export class CategoriesService {

  constructor(private http: Http) {

  }

  public getAllCategory(): Observable<Category[]>{
    let params = new URLSearchParams();
    return this.http
      .get("assets/data/categories.json", {search: params})
      .map(response => {
      let result = response.json();
      return result;
    })
      .catch((error: any) => Observable.throw(error || "Server error"));
  }

}
