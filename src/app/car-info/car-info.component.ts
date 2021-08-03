import { Component, OnInit } from '@angular/core';
import {ICar} from "../model/ICar";
import {CarService} from "../service/car.service";

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss']
})
export class CarInfoComponent implements OnInit {

  cars: ICar[]
  constructor(
    private carService: CarService
  ) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(value => this.cars = value)
  }

}
