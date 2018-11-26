import { Component, OnInit } from '@angular/core';
import { CarSizesModel } from './car-sizes-model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-car-sizes',
  templateUrl: './car-sizes.component.html',
  styleUrls: ['./car-sizes.component.scss']
})
export class CarSizesComponent implements OnInit {


  allcarSizes: CarSizesModel[] = [];

  constructor(private _shared: SharedService) { }

  ngOnInit(): void {
    this.allcarSizes = this._shared.getAlCarSizes();
  }

  listClick(event, newValue: CarSizesModel) {
    console.log(newValue);
    newValue.isSelected = !newValue.isSelected;
}

}
