import { Component, OnInit } from '@angular/core';
import {ICar} from "../model/ICar";
import {CarService} from "../service/car.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
form : FormGroup
  carInfo: ICar

  constructor(
    private carService:CarService
  ) { }

  ngOnInit(): void {
  this.form = new FormGroup({
    model: new FormControl(''),
    price: new FormControl(''),
    year: new FormControl('')
  })
  }

  onSubmit() {
    this.carService.save(this.form.getRawValue()).subscribe();
  }
}
