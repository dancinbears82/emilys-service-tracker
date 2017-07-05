import { inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";
import * as firebase from 'firebase/app';



@Injectable()
export class VehicleService {

  constructor(private af: AngularFireDatabase, private auth: AngularFireAuth) { }

  addNewVehicle(vehicleName: string) {
    const vehicles = this.af.list('vehicles');
    vehicles.push(vehicleName);
  }

  getVehicles() {
    return this.af.list('vehicles')
  }

  deleteVehicle(vehicleKey: string) {
    var vehicleToRemove = this.af.list(`vehicles/${vehicleKey}`)
    vehicleToRemove.remove();
  }


}
