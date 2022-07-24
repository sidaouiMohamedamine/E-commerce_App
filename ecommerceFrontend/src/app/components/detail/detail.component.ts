import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/modules/admin/models/produit';
import { ProduitService } from 'src/app/modules/admin/services/produit.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


    id:number;
    produit:Produit;
  constructor(private activatedRoute:ActivatedRoute,private productService:ProduitService) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.recuperer();
  }

  recuperer(){
    this.productService.getProductById(this.id).subscribe(data=>{
      this.produit=data;
      console.log(this.produit);
    },
    erreur=>console.log("Erreur")
    )
  }




}
