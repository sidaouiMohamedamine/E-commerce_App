import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {



    car1="../assets/car1.jpg";
    car2="../assets/car2.jpg";
    car3="../assets/car3.jpg";
    car4="../assets/car4.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
