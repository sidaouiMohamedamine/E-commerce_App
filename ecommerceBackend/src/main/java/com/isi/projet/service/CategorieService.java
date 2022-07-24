package com.isi.projet.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.isi.projet.entity.Categorie;
import com.isi.projet.exception.ResourceNotFoundException;
import com.isi.projet.repository.CategorieRepository;

@Service
public class CategorieService {
    
	@Autowired
	private CategorieRepository categorieRepository ;
	
	
	/**********************************Méthode pour ajouter une nouvelle catégorie*********************************************/
	public Categorie addCategorie( Categorie categorie) {
		 return categorieRepository.save(categorie);
	}
	/**********************************Méthode pour récupérer la liste des catégories*****************************************/
	public List<Categorie> getCategories(){
		return categorieRepository.findAll();		
	}
	/**********************************Méthode pour la suppression d'une catégorie*******************************************/
	public ResponseEntity <Map<String,Boolean>>deleteCat( Long id) {
		Categorie c=categorieRepository.findById(id)
	    .orElseThrow(()->new ResourceNotFoundException("catégorie not exist with id:"+id));
	      categorieRepository.delete(c);
	      Map<String,Boolean>response=new HashMap();
	      response.put("deleted",Boolean.TRUE);
	      return ResponseEntity.ok(response);
	}
	/**********************************Méthode pour la modification d'une catégorie*****************************************/
	public ResponseEntity<Categorie> updateCat( long id, Categorie categorieDetails){ 
		Categorie categorie =categorieRepository.findById(id)
		.orElseThrow(()->new ResourceNotFoundException("Category exist with id:"+id));
		 categorie.setNomCat(categorieDetails.getNomCat());  
		Categorie updateCat=categorieRepository.save(categorie);
		return ResponseEntity.ok(updateCat);
	}
	/* public ResponseEntity<Categorie> getCategorieByID( long idCat){
			Categorie categorie=categorieRepository.findById(idCat)
					.orElseThrow(()->new ResourceNotFoundException("categorie not exist with id:"+idCat));
						return ResponseEntity.ok(categorie);
		}*/
	
	
}
