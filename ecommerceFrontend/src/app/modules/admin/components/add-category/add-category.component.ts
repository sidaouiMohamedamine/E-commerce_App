import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorie } from '../../models/Categorie';
import { CategorieService } from '../../services/categorie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {


  form:FormGroup
  categorie=new Categorie()
  @ViewChild('closebutton') closebutton:any;
  constructor(private fb:FormBuilder,private categorieService:CategorieService) { }

  ngOnInit(): void {

  }

   add(){
      this.categorieService.addCategorie(this.categorie).subscribe(data=>{
        console.log(data)
        console.log("Operation completed successfully");
        this.closebutton.nativeElement.click();
        window.location.reload();
      },
      erreur=>{
        console.log("Failed Operation");

      }

      )
   }







}
