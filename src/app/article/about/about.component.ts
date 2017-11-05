import { Component, OnInit } from '@angular/core';
import {About} from "../../model/About";
import {HttpService} from "../../common/service/http/http.service";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public about: About = new About();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getAbout();
  }

  getAbout() {
    this.httpService.doGet(
      "about",
      "about/use"
    ).subscribe(
      response => {
        this.about = response;
      }
    )
  }

}
