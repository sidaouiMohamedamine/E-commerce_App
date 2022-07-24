package com.isi.projet.service;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.xml.ws.Response;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.isi.projet.entity.Categorie;
import com.isi.projet.entity.Produit;
import com.isi.projet.exception.ResourceNotFoundException;
import com.isi.projet.repository.CategorieRepository;
import com.isi.projet.repository.ProduitRepository;

@Service
public class ProduitService {
	 
	@Autowired
	private ProduitRepository produitRepository;
	@Autowired
	private ServletContext context;
	@Autowired
	private CategorieRepository categorieRepository ;
            
	/************************************Méthode pour poster un article avec un traitement d'image**********************************/
	public ResponseEntity<Response> saveProduit(MultipartFile file, String produit) throws JsonParseException , JsonMappingException,  Exception
	{
		 System.out.println("Ok .............");
	        Produit prd = new ObjectMapper().readValue(produit,Produit.class);
			boolean isExit = new File(context.getRealPath("/Images/")).exists();
	        if (!isExit)
	        {
	        	new File (context.getRealPath("/Images/")).mkdir();
	        	System.out.println("mk dir.............");
	        }
	        String filename = file.getOriginalFilename();
	        String newFileName = FilenameUtils.getBaseName(filename)+"."+FilenameUtils.getExtension(filename);
	        File serverFile = new File (context.getRealPath("/Images/"+File.separator+newFileName));
	        try
	        {
	        	System.out.println("Image");
	        	 FileUtils.writeByteArrayToFile(serverFile,file.getBytes());
	        	 
	        }
	        catch(Exception e) {
	        	e.printStackTrace();
	        }

	       
	        prd.setImage(newFileName);
	        Produit p = produitRepository.save(prd);
	        if (p != null)
	        {
	        	return new ResponseEntity<Response>(HttpStatus.OK);
	        }
	        else
	        {
	        	return new ResponseEntity<Response>(HttpStatus.BAD_REQUEST);	
	        }
	}	
	/*************************************Méthode pour récupérer toute la liste des produit***************************/
	public List<Produit> getAll(){
		 return produitRepository.findAll(); 		 
	 }
		/*************************************Méthode pour récupérer l'image d'un produit**********************************/
	 public byte[] getPhoto(Long id) throws Exception{
		 Produit p   = produitRepository.findById(id).get();
		 return Files.readAllBytes(Paths.get(context.getRealPath("/Images/")+p.getImage()));
	 }
	 	/*************************************Méthode pour la suppression d'un produit************************************/
		public ResponseEntity <Map<String,Boolean>>deleteProduit(@PathVariable Long id) {
			Produit p=produitRepository.findById(id)
		    .orElseThrow(()->new ResourceNotFoundException("produit not exist with id:"+id));
		      produitRepository.delete(p);
		      Map<String,Boolean>response=new HashMap();
		      response.put("deleted",Boolean.TRUE);
		      return ResponseEntity.ok(response);
		}
		/********************Affichage des produits***************************************************************/
		 public List<Produit> findAllProduct(){
			 return produitRepository.findAll();
			}
		 /************************Affichage des produits trier selon un champ***********************/ 
		 public List<Produit> findProduitWithSort(String champ){
			 return produitRepository.findAll(Sort.by(Sort.Direction.ASC,champ));
		 }
		 /****************************Pagination des pages***********************************/
		 public Page<Produit> findProduitByPagination(int offset,int pageSize){
			 Page<Produit> produits = produitRepository.findAll(PageRequest.of(offset, pageSize));
			 return produits;
		 }
		
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	  


}
