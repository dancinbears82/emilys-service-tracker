import { inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';


@Injectable()
export class VehicleService {

  constructor(private af: AngularFire) { }

  addNewVehicle(vehicleName: string) {
    if (!vehicleName || vehicleName.trim() == '') {
      return;
    }
    const vehicles = this.af.database.list('vehicles/');
    const saveVehicleKey = vehicles.push({
      text: vehicleName
    }).key;



  }


}
