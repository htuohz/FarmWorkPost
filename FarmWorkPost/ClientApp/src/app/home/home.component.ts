import { Component, ViewChild, TemplateRef, OnInit } from "@angular/core";
import { Job } from "../models/model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {

  public jobs: Array<Job> = [];

  constructor() {}

  ngOnInit() {
    this.getJobs();

  }


  /**
   * get jobs
   */
  getJobs() {
    this.jobs =[ 
      {
        id:1,
        title: 'Cherry Picker',
        location:'Hobart',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua."
    }
  ]
  }
}
