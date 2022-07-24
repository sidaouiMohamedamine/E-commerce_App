import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-root',
  templateUrl: './home-root.component.html',
  styleUrls: ['./home-root.component.css']
})
export class HomeRootComponent implements OnInit {
  isShown = false;
  open=false;

  constructor() { }

  ngOnInit(): void {
  }

}
