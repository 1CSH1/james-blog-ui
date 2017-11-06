import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";


@Injectable()
export class HttpService {

  private baseUrl = "http://localhost:5027";

  constructor(private http: Http) {

  }

  /**
   * 发送 GET 请求
   * @param serviceName     服务名字
   * @param path            请求路径
   * @param params
   * @param headers         报文头
   * @returns {Observable<R|T>}
   */
  public doGet(serviceName: string, path: string, params?: any, headers?: any): Observable<any> {
    let theHeaders: Headers = new Headers();
    theHeaders.append("Content-Type", "application/json; charset=utf-8");
    for (let header in headers) {
      theHeaders.append(header, headers[header]);
    }
    let queryString = this.param(params);
    if (queryString !== "") {
       queryString = "?" + queryString;
    }
    let url = this.baseUrl + "/" + serviceName + "/" + path + queryString;
    return this.http
      .get(url, {headers: theHeaders})
      .map(response => response.json())
      .catch((error: any) => Observable.throw(error || "Server error"));
  }

  /**
   * 发送 Post 请求
   * @param serviceName   服务名字
   * @param path          请求路径
   * @param params        请求报文
   * @param headers       报文头
   * @returns {Observable<R|T>}
   */
  public doPost(serviceName: string, path: string, params?: any, headers?: any): Observable<any> {
    let theHeaders: Headers = new Headers();
    theHeaders.append("Content-Type", "application/json; charset=utf-8");
    for (let header in headers) {
      theHeaders.append(header, headers[header]);
    }
    let url = this.baseUrl + "/" + serviceName + "/" + path ;
    return this.http
      .post(url, JSON.stringify(params), {headers: theHeaders})
      .map(response => response.json())
      .catch((error: any) => Observable.throw(error || "Server error"));

  }

  public doPut(serviceName: string, path: string, params?: any, headers?: any): Observable<any> {
    let theHeaders: Headers = new Headers();
    theHeaders.append("Content-Type", "application/json; charset=utf-8");
    for (let header in headers) {
      theHeaders.append(header, headers[header]);
    }
    let url = this.baseUrl + "/" + serviceName + "/" + path ;
    return this.http
      .put(url, JSON.stringify(params), {headers: theHeaders})
      .map(response => response.json())
      .catch((error: any) => Observable.throw(error || "Server error"));

  }


  /**
   * Get 方法解析参数
   * @param options
   * @returns {string}
   */
  private param(options: any): string {
    let params = "";
    for (let k in options) {
      let value = options[k] !== undefined ? options[k] : "";
      params += `&${k}=${encodeURIComponent(value)}`;
    }
    return params ? params.substring(1) : "";
  }
}
