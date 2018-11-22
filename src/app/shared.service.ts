import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CarServices } from './CarServices';
import { CarSizesModel } from './car-sizes/car-sizes-model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

   carServices: Subject<any>;
   carSize: Subject<CarSizesModel>;

  constructor() { }

  getAllCarServices(cars: any) {
    this.carServices = cars;
   }

  //  getAllCarSizes(sizes: any) {
  //    this.carSize.next(sizes);
  //  }

}
