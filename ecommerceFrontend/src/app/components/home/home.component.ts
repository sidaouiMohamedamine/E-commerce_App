import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
   // this.getProduit();
  }












 /********************************************Return all product*****************************/
 /*getProduit(){
  this.produitService.pagePorduct().subscribe(data=>{
    console.log(data);
    this.tab=data.response.content;
    this.totalPage=data.response.totalPages;
    this.currentPage=data.response.number;
    console.log(this.tab);
    console.log(this.totalPage);
    console.log(this.currentPage);
  },
  erreur=>console.log('erreur de chargement de données')
  )

}*/


}
