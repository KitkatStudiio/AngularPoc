import { Component, OnInit, Input } from '@angular/core';
import { CarSizesComponent } from '../car-sizes/car-sizes.component';
import { AllservicesComponent } from '../allservices/allservices.component';
import { Subscription } from 'rxjs';
import { CarServices } from '../CarServices';
import { CarSizesModel } from '../car-sizes/car-sizes-model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  carserviceOld: CarServices[];
  carNewSize: CarSizesModel[];
  subscription: Subscription;

  constructor(private _shared: SharedService) { }

  ngOnInit() {
  this._shared.carServices.subscribe((carService: CarServices[]) => {
    this.carserviceOld = carService;
    console.log(this.carserviceOld);
});

this._shared.carSize.subscribe((carSSize: CarSizesModel[]) => {
  this.carNewSize = carSSize;
  console.log(this.carNewSize);
});
  }


}
