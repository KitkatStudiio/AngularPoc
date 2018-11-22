import { Component, OnInit } from '@angular/core';
import { CarServices } from '../CarServices';

@Component({
  selector: 'app-allservices',
  templateUrl: './allservices.component.html',
  styleUrls: ['./allservices.component.scss']
})
export class AllservicesComponent {

  carServices: CarServices[] = [
    new CarServices('Oil and filter change', 1000, 'https://img.icons8.com/ios/1600/car-service.png', false),
    new CarServices('New air filter', 500, 'https://img.icons8.com/ios/1600/car-service.png', false),
    new CarServices('New fuel filter', 5500 , 'https://img.icons8.com/ios/1600/car-service.png', false),
    new CarServices('New spark plugs', 1500 , 'https://img.icons8.com/ios/1600/car-service.png', false),
    new CarServices('Removal ', 1400, 'https://img.icons8.com/ios/1600/car-service.png', false),
    new CarServices('Reset service light', 2300 , 'https://img.icons8.com/ios/1600/car-service.png', false),
    new CarServices('Clutch operation', 1100, 'https://img.icons8.com/ios/1600/car-service.png', false),
  ];

  constructor() { }
  listClick(event, newValue: CarServices) {
    console.log(newValue);
    newValue.isSelected = !newValue.isSelected;
}

}
