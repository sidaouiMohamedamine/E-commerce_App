import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorie } from '../../models/Categorie';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-modif-cat',
  templateUrl: './modif-cat.component.html',
  styleUrls: ['./modif-cat.component.css']
})
export class ModifCatComponent implements OnInit {

  @Input() idCat:number
  @ViewChild('closebutton') closebutton:any;
  //@Input() idMod:number
  @Input()categorie:Categorie
  formM:FormGroup
  obj:Categorie=new Categorie()


  constructor(private categorieService:CategorieService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  /********************************************************************Controle de champ de update categorie */


                                  /********************************Modification***********************************************/
  modifier(){
    this.categorieService.updateCat(this.categorie,this.idCat).subscribe(data=>{
      console.log(" Modification avec succèes ");
      console.log(this.idCat);
      console.log(this.obj)

      // this.closebutton.nativeElement.click();
     // window.location.reload();
    },
    erreur=>console.log("erreur de modification")
    )
    }



}
