import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../../models/produit';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


   tab:Produit[]
   close:boolean=false
   formModal: any
   @ViewChild('closebutton')
   closebutton:any
   id:number
   idMod:number
   totalLength:any
   idProduct:number
   offset=0
   pageSize=4
   page=1
   product:Produit=new Produit()
   pageSizes = [4, 8, 12]
   ref:any
   key:any=''
  reverse:boolean=false
  constructor(private produitService:ProduitService,private router:Router) { }

  ngOnInit(): void {
    this.retrieve()

  }
  identifier(id:number){
    this.id=id;
  }
  /*********************************************************************Affichage des****************************************************************/
  getRequestParams(offset: number, pageSize: number){

    if (offset) {
      this.offset= offset-1;
    }
    if (pageSize) {
      this.pageSize = pageSize;
    }
  }
  /********************************************************************Récupération des données de la base de donnée***********************************/
  retrieve(): void {
    this.getRequestParams(this.offset,this.pageSize)
    this.produitService.pagePorduct(this.offset,this.pageSize)
    .subscribe(
      data => {
        data=data.response
        console.log(data)
        this.tab = data.content;
        this.totalLength=data.totalElements
      },
      error => {
        console.log(error);
      });}
      /***********************************************************Changement de la taille du page*******************************************************/
      handlePageSizeChange(event: any): void {
        this.pageSize = event.target.value;
        this.page = 1;
        this.retrieve();
      }
      /************************************************************Pour la pagination*******************************************************************/
      handlePageChange(event: number): void {
        this.offset = event;
         this.retrieve();
      }

  /********************************************************************Modification d'un produit*********************************************************/
  getById(id:number){
    this.idMod=id;
    console.log(this.idMod);
    this.produitService.getProductById(this.idMod).subscribe(data=>{
      this.product=data;
      console.log("GetById")
      console.log(this.product)
    }
   )
  }
  /**********************************************************************Suppression d'un produit**********************************************/
  delete(id:number){
    id=this.id
       this.produitService.deleteProduct(id).subscribe(
         result=>{
           console.log('delete valide');
           console.log(id)
           this.closebutton.nativeElement.click();
           window.location.reload();

         },
         erreur=>{
           console.log('delete invalid');
         }
       )
       console.log("ID:"+id);

  }
  /***************************************************************** Pour trier selon prix ou stock ************************************************/
  onSort($event:any){
  }
  /****************************************************************Pour rechercher un produit selon référence*************************************/
  Search(){
    if(this.ref == "")
    {
      this.ngOnInit();
    }
    else
    {
      this.tab=this.tab.filter(res=>{
        return res.ref.toLocaleLowerCase().match(this.ref.toLocaleLowerCase());
      })
    }
  }/****************************************************************Trie selon prix***************************************************************/
  sort(key:any){
    this.key =key;
    this.reverse=!this.reverse;
  }
  /*********************************************************************************************************FIN***********************************/

}
