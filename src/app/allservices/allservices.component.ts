import { Component, OnInit } from '@angular/core';
import { CarServices } from '../CarServices';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-allservices',
  templateUrl: './allservices.component.html',
  styleUrls: ['./allservices.component.scss']
})
export class AllservicesComponent implements OnInit {

  allCars: CarServices[];

  constructor(private _service: SharedService) { }
  ngOnInit(): void {
   this.allCars = this._service.getAllCarservice();
  }

  listClick(event, newValue: CarServices) {
    newValue.isSelected = !newValue.isSelected;
  }
}
