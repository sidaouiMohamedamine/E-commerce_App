import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/Categorie';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }




  addProduct(formData: FormData):Observable<any>
  {
      return this.http.post('http://localhost:8080/api/saveProduct',formData);
  }
  uploadFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});

		return this.http.request(req);
   }
   getProduct():Observable<any>
   {
          return this.http.get('http://localhost:8080/api/getProduit');
   }
   deleteProduct(id:number):Observable<Object>{
     return this.http.delete(`http://localhost:8080/api/deleteProduit/${id}`);
   }
   updateProduit(produit:Produit,id:number):Observable<Object>{
     return this.http.put(`http://localhost:8080/api/modiferProduit/${id}`,produit);
   }
   getProductById(id:number):Observable<any>{
    return this.http.get<Produit>(`http://localhost:8080/api/getProduitById/${id}`);
   }
   /***************************************Fonction pour la pagination***************************/
   pagePorduct(offset:number,pageSize:number):Observable<any>
   {
     return this.http.get<any>(`http://localhost:8080/api/pagination/${offset}/${pageSize}`);
   }


}
