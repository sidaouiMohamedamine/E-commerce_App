import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  notFound:String="../assets/notFound.png"
  constructor() { }

  ngOnInit(): void {
  }

}
