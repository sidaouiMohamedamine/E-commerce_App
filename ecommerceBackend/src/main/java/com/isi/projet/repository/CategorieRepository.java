package com.isi.projet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isi.projet.entity.Categorie;

@Repository
public interface CategorieRepository extends JpaRepository<Categorie,Long>{

}
