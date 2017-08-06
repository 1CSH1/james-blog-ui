import { Component, OnInit } from '@angular/core';
import {About} from "../../model/About";
import {AboutService} from "./about.service";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public about: About;

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.getAbout();
  }

  getAbout() {
    this.aboutService.getAbout().subscribe(response => {
      this.about = response["data"];
    });
  }

}
