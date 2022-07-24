import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {


  constructor(private http:HttpClient) { }

  /***********************************************************Ajouter une nouvelle catégorie*************************************/
  addCategorie(categorie:Categorie):Observable<Object>
  {
      return this.http.post('http://localhost:8080/api/saveCat',categorie);
  }
  /***********************************************************Récupérer la liste des catégories**********************************/
  getCat():Observable<any>{

    return this.http.get('http://localhost:8080/api/getCat');
  }
  /*******************************************Méthode pour la suppression d'une catégorie****************************************/
  deleteCat(idCat:number):Observable<Object>{
    return this.http.delete(`http://localhost:8080/api/deleteCat/${idCat}`);
  }
  /********************************************** Récupération du catégorie par id ***********************************************/
  getCategorieById(idCat:number):Observable<any>{
    return this.http.get<Categorie>(`http://localhost:8080/api/getCatById/${idCat}`);
   }
  /******************************************Méthode pour la modification d'un produit*******************************************/
  updateCat(categorie:Categorie,idCat:number):Observable<Object>{
    return this.http.put(`http://localhost:8080/api/modifierCat/${idCat}`,categorie);
  }







}
