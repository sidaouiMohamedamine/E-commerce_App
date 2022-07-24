import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorie } from '../../models/Categorie';
import { Produit } from '../../models/produit';
import { CategorieService } from '../../services/categorie.service';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-updat-product',
  templateUrl: './updat-product.component.html',
  styleUrls: ['./updat-product.component.css']
})
export class UpdatProductComponent implements OnInit {
  formM:FormGroup
  tabCat:Categorie[]
  @Input() id:number
  @Input()product:Produit
  @ViewChild('closebutton') closebutton:any;

  constructor(private fb:FormBuilder,private productService:ProduitService,private categorieService:CategorieService) { }

  ngOnInit(): void {
    this.controleM();
    this.getCat();

  }
  controleM(){
    this.formM=this.fb.group(
       {
         refU:this.fb.control("",Validators.required),
         nomU:this.fb.control("",Validators.required),
         descriptionU:this.fb.control("",Validators.required),
         titreU:this.fb.control("",Validators.required),
         prixU:this.fb.control("",Validators.required),
         stockU:this.fb.control("",Validators.required),
         categorieU:this.fb.control("",Validators.required),
         imageU:this.fb.control("",Validators.required),
       }
     )
   }
   /**************************************************Fonction pour la modification d'un produit******************************/
   modifier(){
       this.productService.updateProduit(this.product,this.id).subscribe(data=>{
         console.log("modification avec succèes");
         this.closebutton.nativeElement.click();
         window.location.reload();
       },
       erreur=>console.log("erreur")
       )

   }
   /***************************************************Récupération des catégories*********************************************/
   getCat(){
    this.categorieService.getCat().subscribe(data=>{
     this.tabCat=data;
     console.log(this.tabCat)
    },
    erreur=>{
     console.log("erreur!!!")
    }
    )
  }






}
