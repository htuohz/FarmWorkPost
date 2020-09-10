import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Job } from "src/app/models/model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class JobService {
  private BASEURL: string = "https://localhost:5001/api/job";

  constructor(private http: HttpClient) {}

  /**
   * post a new job
   */
  postNewJob(job: Job): Observable<Job> {
    console.log(job);
    return this.http.post<Job>(this.BASEURL +'/PostNewJob', job);
  }
}
