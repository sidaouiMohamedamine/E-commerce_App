import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorie } from '../../models/Categorie';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  form:FormGroup
  tabCat:Categorie[]
  @ViewChild('closebutton') closebutton:any;
  idCat:number
  idMod:number
  categorie:Categorie=new Categorie()


  /***************************************************************************************** */
  constructor(private fb:FormBuilder,private categorieService:CategorieService) { }
  ngOnInit(): void {
    this.controle()
    this.getCat()
    }
  /************************************************************Controle du champ*************************************************/
  controle(){
    this.form=this.fb.group(
      {
        catU:this.fb.control("",Validators.required),
      }
    )
   }
   /*******************************************************Récupération du liste de catégorie***********************************/
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
   /*******************************************************Suppression d'une catégorie*****************************************/
   delete(idCat:number){
    idCat=this.idCat
    console.log(idCat)
       this.categorieService.deleteCat(idCat).subscribe(
         result=>{
           console.log('delete valide');
           console.log(idCat)
           this.closebutton.nativeElement.click();
           window.location.reload();

         },
         erreur=>{
           console.log('delete invalid');
         }
       )
  }
  /**************************************Fonction pour passer l'id d'un produit dans la fenetre modal et supprimer un produit***************************/
  identifier(idCat:number){
    this.idCat=idCat;

  }
  /*** */
  getCatById(idCat:number){
    this.idMod=idCat;
    console.log(this.idMod);
    this.categorieService.getCategorieById(this.idMod).subscribe(data=>{
      this.categorie=data;
      console.log("catById")
      console.log(this.categorie);
    }
   )
  }





}
