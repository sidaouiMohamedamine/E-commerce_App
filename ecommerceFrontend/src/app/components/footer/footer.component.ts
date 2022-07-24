import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {



  logo="../assets/lg.png"
  date=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
