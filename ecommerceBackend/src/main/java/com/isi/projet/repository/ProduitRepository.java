package com.isi.projet.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isi.projet.entity.Produit;


@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long> {
	
		}
