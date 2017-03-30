import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

const firebaseDatabaseConfig = {
    apiKey: "AIzaSyBp7dpH9bcC4cSEUakIBq2FqBPcP_pe0zQ",
    authDomain: "emilys-service-tracker.firebaseapp.com",
    databaseURL: "https://emilys-service-tracker.firebaseio.com",
    storageBucket: "emilys-service-tracker.appspot.com",
    messagingSenderId: "41467514844"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
