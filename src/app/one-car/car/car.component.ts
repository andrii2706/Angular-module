import {Component, Input, OnInit} from '@angular/core';
import {ICar} from "../../model/ICar";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input()
  car:ICar

  constructor(
  ) { }

  ngOnInit(): void {

  }

}
