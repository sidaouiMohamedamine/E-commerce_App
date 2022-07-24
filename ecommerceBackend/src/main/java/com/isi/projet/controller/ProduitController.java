package com.isi.projet.controller;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.criteria.Order;
import javax.servlet.ServletContext;
import javax.xml.ws.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.boot.json.JsonParseException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.JsonMappingException;
import com.isi.projet.entity.APIResponse;
import com.isi.projet.entity.Categorie;
import com.isi.projet.entity.Produit;
import com.isi.projet.exception.ResourceNotFoundException;
import com.isi.projet.repository.ProduitRepository;
import com.isi.projet.service.ProduitService;




@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200/") 
public class ProduitController {
       
	@Autowired
	private ProduitRepository produitRepository;
	@Autowired
	private ProduitService produitService;
	
	@CrossOrigin("http://localhost:4200/")
	@PostMapping("/saveProduct")
	public ResponseEntity<Response> saveProduit(@RequestParam("file") MultipartFile file,@RequestParam("produit") String produit) throws JsonParseException , JsonMappingException,  Exception
	{
		 return produitService.saveProduit(file, produit);
	}
	 /******************************************************************************************/
	@GetMapping("/getProduit") 
	  public List<Produit> getAllProduct() {
	     return produitService.getAll();
	  }
	 /******************************************************************************************/
	 @GetMapping(path="/ImageProduit/{id}")
	 public byte[] getPhoto(@PathVariable("id") Long id) throws Exception{
          return produitService.getPhoto(id);
	 }
	 /******************************************************************************************/
	 @DeleteMapping(path="/deleteProduit/{id}")
		public ResponseEntity <Map<String,Boolean>>deleteProduit(@PathVariable long id) {
			Produit produit=produitRepository.findById(id)
		    .orElseThrow(()->new ResourceNotFoundException("User not exist with id:"+id));
		      produitRepository.delete(produit);
		      Map<String,Boolean>response=new HashMap();
		      response.put("deleted",Boolean.TRUE);
		      return ResponseEntity.ok(response);
		}
	 /********************************************Méthode pour la modification d'un produit**********************************************/
	 @PutMapping("/modiferProduit/{id}")
		public ResponseEntity<Produit> updateUser(@PathVariable long id,@RequestBody Produit produitDetails){
			Produit produit =produitRepository.findById(id)
					.orElseThrow(()->new ResourceNotFoundException("User not exist with id:"+id));
			  produit.setRef(produitDetails.getRef());
	           produit.setTitre(produitDetails.getTitre());
	           produit.setDescription(produitDetails.getDescription());
	           produit.setCategorie(produitDetails.getCategorie());
	           produit.setPrix(produitDetails.getPrix());
	           produit.setStock(produitDetails.getStock());
	           produit.setImage(produitDetails.getImage());
			Produit updateProduit=produitRepository.save(produit);
			return ResponseEntity.ok(updateProduit);
			
		}
	 /******************************************************************************************/
	 @GetMapping("/getProduitById/{id}")
	 public ResponseEntity<Produit> getProduitByID(@PathVariable long id){
			Produit produit=produitRepository.findById(id)
					.orElseThrow(()->new ResourceNotFoundException("User not exist with id:"+id));
						return ResponseEntity.ok(produit);
		}
	 /******************************************************************************************/
	 @GetMapping("/liste")
	 public APIResponse<List<Produit>> getProduits(){
		 List<Produit> allProduits = produitService.findAllProduct();
		 return new APIResponse<>(allProduits.size(), allProduits);	 
		}
	 /****************************************Affichage selon trie du champ**************************************************/
	 @GetMapping("/{champ}")
	 public APIResponse<List<Produit>> getProduitWithSort(@PathVariable String champ){
		 List<Produit> allProduits=produitService.findProduitWithSort(champ); 
		 return new APIResponse<>(allProduits.size(), allProduits);
	 }
	 /*****************************************Pagination des pages*************************************************/
	 @GetMapping("/pagination/{offset}/{pageSize}")
	 public APIResponse<Page<Produit>> getProduitWithPagination(@PathVariable int offset, @PathVariable int pageSize){
		 Page<Produit> produitWithPagination = produitService.findProduitByPagination(offset, pageSize);
		 return new APIResponse<>(produitWithPagination.getSize(), produitWithPagination);
	 }
	
	
	 
	 
	 
	 
	 
	 
	 
        
	}
	

