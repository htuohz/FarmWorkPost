import { Injectable } from '@angular/core';
import { ConfigService } from '../common/config.service';
import { HttpClient } from '@angular/common/http';
import { AppUser } from 'src/app/models/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private configService: ConfigService, private http: HttpClient) { }

  /**
   * Register New User
   */
  registerNewUser(user: AppUser): Observable<any>{
   return this.http.post(this.configService.getBaseUrl + '/user/UserLogin', user);
  }
}
