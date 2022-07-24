import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/modules/admin/models/produit';
import { ProduitService } from 'src/app/modules/admin/services/produit.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


    img="../assets/st.jpg";
    idProduct:number;
    tab:Produit[];
    offset=0;
    pageSize=4
    page=1
    pageSizes = [4, 8, 12];
    totalLength:any

    constructor(private router:Router,private activatedRoute:ActivatedRoute,private produitService:ProduitService) { }

    ngOnInit(): void {
    this.retrieve();
    }
                                        /************************************************Pour la récupération des produit***************************************************/
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
                                            /************************************Fonction de passage entre les page**********************************************/
      handlePageChange(event: number): void {
        this.offset = event;
         this.retrieve();
      }
                                                /********************************************* Pour la pagination d'une page vers une autre*/
      getRequestParams(offset: number, pageSize: number){

        if (offset) {
          this.offset= offset-1;
        }
        if (pageSize) {
          this.pageSize = pageSize;
        }
      }


                                            /************************************************Affichage de nombre de produit par page:La liste déroulante********************************************/
      handlePageSizeChange(event: any): void {
        this.pageSize = event.target.value;
        this.page = 1;
        this.retrieve();
      }
                                          /********************************************* Pour la redirection vers la page *******************************************************/
      detail(id:number){
        this.router.navigate(['/detail',id])
      }



}
