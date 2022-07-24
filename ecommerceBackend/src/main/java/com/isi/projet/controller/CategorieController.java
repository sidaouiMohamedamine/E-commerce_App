package com.isi.projet.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isi.projet.entity.Categorie;
import com.isi.projet.entity.Produit;
import com.isi.projet.exception.ResourceNotFoundException;
import com.isi.projet.repository.CategorieRepository;
import com.isi.projet.service.CategorieService;




@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200/")
public class CategorieController {
	
	@Autowired
	private CategorieService categorieService;
	@Autowired
	private CategorieRepository categorieRepository;

	
	@PostMapping("/saveCat")
	public void  saveCategorie(@RequestBody Categorie categorie) {
		this.categorieService.addCategorie(categorie);
	}
	@GetMapping("/getCat")
	public List<Categorie>getCategorie(){
		return categorieService.getCategories();
	}
	@DeleteMapping(path="/deleteCat/{id}")
	public ResponseEntity <Map<String,Boolean>>deleteProduit(@PathVariable long id) {
			return this.categorieService.deleteCat(id); 	
	}
	/*******************************Méthode pour la récupération du catégorie par id******************************************/
	 @GetMapping("/getCatById/{id}")
	 public ResponseEntity<Categorie> getProduitByID(@PathVariable long id){
			Categorie categorie=categorieRepository.findById(id)
					.orElseThrow(()->new ResourceNotFoundException("Categorie not exist with id:"+id));
						return ResponseEntity.ok(categorie);
		}
	 /*****************************Méthode pour la modification d'une catégorie*************************************/
		
	 @PutMapping("/modifierCat/{idCat}")
		public ResponseEntity<Categorie> updateUser(@PathVariable long idCat,@RequestBody Categorie categorieDetails){
			Categorie categorie =categorieRepository.findById(idCat)
					.orElseThrow(()->new ResourceNotFoundException("User not exist with id:"+idCat));
			categorie.setNomCat(categorieDetails.getNomCat());
			categorie.setProduit(categorieDetails.getProduit());
			Categorie updateCategorie=categorieRepository.save(categorie);
			return ResponseEntity.ok(updateCategorie);
			
		}


}
