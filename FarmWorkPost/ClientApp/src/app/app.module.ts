import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { routes } from "./app.routes";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./components/nav-menu/nav-menu.component";
import { HomeComponent } from "./components/home/home.component";
import { CounterComponent } from "./components/counter/counter.component";
import { FetchDataComponent } from "./components/fetch-data/fetch-data.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SigninComponent } from "./components/signin/signin.component";
import { PostjobComponent } from "./components/postjob/postjob.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from "angularx-social-login";

import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angularx-social-login";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FooterComponent,
    SigninComponent,
    PostjobComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com"
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider("298510618024928"),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
