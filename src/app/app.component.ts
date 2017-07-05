import { VehicleService } from './vehicle.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireAuthModule } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";



@Component({
  selector: 'aap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  //vehicleService: any;
  userService: any;
  vehicles: FirebaseListObservable<any[]>;
  title = 'aap works!';
  user: Observable<firebase.User>;;
  newVehicle: any;




  constructor(private db: AngularFireDatabase,
    private auth: AngularFireAuth, private router: Router, private vehicleService: VehicleService) {
    //  this.vehicleList = db.list('vehicleList');
    this.user = auth.authState;
  }

  ngOnInit() {
    //this.userService.user$.subscribe(user => this.user = user)

    this.vehicles = this.vehicleService.getVehicles();

  }

  LoginGoogle() {
    console.log("login button pressed");
    this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log("logged in ", this.user)

  };

  Logout() {
    console.log("logout button pressed");
    this.auth.auth.signOut();
  };


  addVehicle(vehicle: string) {
    this.newVehicle = vehicle;
    console.log("we are here", this.newVehicle);
    if (!this.newVehicle || this.newVehicle.trim() == '') {
      return;
    }
    else {
      console.log("newVehicle = ", this.newVehicle);
      this.vehicleService.addNewVehicle(this.newVehicle);

    }
  }

  deleteVehicle(key: string) {
    this.vehicleService.deleteVehicle(key);
  }








}
