import { Component, OnInit} from '@angular/core';
import { GoogleLoginProvider, FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';
import { AppUser } from 'src/app/models/model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  private currentUser: AppUser ;

  constructor(
    private toasterService: ToastrService,
    private authService: SocialAuthService,
    private userService: UserService) { }

  ngOnInit() {
  }

  /**
   * Login with google
   */
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.registerSocialUser();

  }

  /**
   * Log in with FB
   */
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.registerSocialUser();

  }

  /**
   * 
   */
  /**
   * Get loggined social media user
   */
  registerSocialUser() {
    this.authService.authState.subscribe(
      res => {
        this.currentUser = res;
        this.userService.registerNewUser(this.currentUser).subscribe(
            res => {
            //this.toasterService.success(`You have successfully login`);
            localStorage.setItem('token', res.token);

          },
          err => {
           // this.toasterService.error(`${err.error.message}`)
            console.error("ERROR: GetCurrentUser", err);

          }
        );
      },

      err => {
        console.log("ERROR: GetSocialUser Failed");
      }
    );

  }
  
}
