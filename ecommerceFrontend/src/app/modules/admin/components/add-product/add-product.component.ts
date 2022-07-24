import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from '../../models/Categorie';
import { CategorieService } from '../../services/categorie.service';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {



  form:FormGroup
  tabCat:Categorie[]
  image:any
  userFile:any;
  message:any;
  imagePath:any;
  imgURL: any;
  id:number
  obj:any
  @ViewChild('closebutton') closebutton:any;

  constructor(private fb:FormBuilder,private produitService:ProduitService,private router:Router,private categorieService:CategorieService) { }

  ngOnInit(): void {
    this.controle()
    this.getCat()

  }
  controle(){
    this.form=this.fb.group(
      {
        ref:this.fb.control("",Validators.required),
        description:this.fb.control("",Validators.required),
        titre:this.fb.control("",Validators.required),
        prix:this.fb.control("",Validators.required),
        stock:this.fb.control("",Validators.required),
        categorie:this.fb.control("",Validators.required),
        image:this.fb.control("",Validators.required),

      }
    )
  }
  onSelectFile(event:any) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;

    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = file;
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }}

  /*****************************************************Fonction pour ajouter un produit******************************************/
 addProduct(){
      const formData = new  FormData();
      const produit = this.form.value;
      formData.append('produit',JSON.stringify(produit));
      formData.append('file',this.userFile);
      console.log(produit)
      console.log("I'm here !!!!")
      this.produitService.addProduct(formData).subscribe(data => {
        console.log(data)
        console.log("Operation completed successfully");
        this.closebutton.nativeElement.click();
        window.location.reload();
      },
      erreur=>{
       // console.log(erreur);
        console.log("Failed operation !")
      }
      );
  }
/**************************************Fonction pour passer l'id d'un produit dans la fenetre modal et supprimer un produit***************************/
  identifier(id:number){
    this.id=id;
  }
  /***********************************récupération des catégorie */
    getCat(){
      this.categorieService.getCat().subscribe(data=>{
        console.log("catégorie récupéré")
        this.tabCat=data;
        console.log(this.tabCat[0]);
      console.log(data)
      },
      erreur=>{
      console.log("erreur de récupération de catégorie!!!")
      }
      )
    }
    change(i:any){
      console.log(this.tabCat[i])
    }

    onSubmit(){
      this.addProduct()
    }



}
