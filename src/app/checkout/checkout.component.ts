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

  selectedCars: CarServices[];
  selectedSizes: CarSizesModel[];


  constructor(private _shared: SharedService) { }

  ngOnInit() {

    // onInit getting all selected value from Services
    this.selectedCars =  this._shared.getAllCarservice();
    this.selectedSizes = this._shared.getAlCarSizes();
  }


}
