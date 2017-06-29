import { VehicleService } from './vehicle.service';
import { Component } from '@angular/core';
import { UserService } from "./shared/user.service";
import { User } from "./shared/user";

import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";



@Component({
  selector: 'aap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'aap works!';
  user: Observable<firebase.User>;;
  newVehicle: string;
  vehicleList: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase,
    public auth: AngularFireAuth) 
 {
   this.vehicleList =db.list("vehicleList");
   this.user = auth.authState;
  }

  ngOnInit() {
    this.userService.user$.subscribe(user => this.user = user)
  }

  LoginGoogle() {
    console.log("login button pressed");
    this.userService.login();
  };

  Logout() {
    console.log("logout button pressed");
    this.userService.logout();
  };


  AddVehicle() {
    if (!this.newVehicle || this.newVehicle.trim() == '') {
      return;
    }
    else {
      console.log("newVehicle = ", this.newVehicle);
      this.vehicleService.addNewVehicle(this.newVehicle);
    }
  }




}
