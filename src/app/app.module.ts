import { VehicleService } from './vehicle.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

// import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";


const firebaseDatabaseConfig = {
  apiKey: "AIzaSyBp7dpH9bcC4cSEUakIBq2FqBPcP_pe0zQ",
  authDomain: "emilys-service-tracker.firebaseapp.com",
  databaseURL: "https://emilys-service-tracker.firebaseio.com",
  projectId: "emilys-service-tracker",
  storageBucket: "emilys-service-tracker.appspot.com",
  messagingSenderId: "41467514844"
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
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseDatabaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    RouterModule.forRoot([

      { path: 'login', component: LoginComponent },


    ])

  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
