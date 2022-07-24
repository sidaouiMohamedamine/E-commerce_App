package com.isi.projet;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.isi.projet.entity.Produit;
import com.isi.projet.repository.ProduitRepository;

@SpringBootTest
class EcommerceBackendApplicationTests {

	@Autowired()
	private ProduitRepository produitRepository;
	
	@Test
	public void testCreateProduit() {
	}
	
	@Test
	public Produit testFindProduit() {
		Produit p =produitRepository.findById(1L).get();
		return p;
	}

	
	
	
	
	
	
	
	
	
	
	
}
