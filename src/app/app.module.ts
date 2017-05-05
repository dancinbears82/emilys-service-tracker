import { UserService } from './shared/user.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

const firebaseDatabaseConfig = {
  apiKey: "AIzaSyBp7dpH9bcC4cSEUakIBq2FqBPcP_pe0zQ",
  authDomain: "emilys-service-tracker.firebaseapp.com",
  databaseURL: "https://emilys-service-tracker.firebaseio.com",
  storageBucket: "emilys-service-tracker.appspot.com",
  messagingSenderId: "41467514844"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    Ng2Bs3ModalModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseDatabaseConfig, firebaseAuthConfig),
    HttpModule,
    RouterModule.forRoot([

      { path: 'login', component: LoginComponent },


    ])

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
