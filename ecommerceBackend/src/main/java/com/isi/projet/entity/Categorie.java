package com.isi.projet.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter()
@Setter()
@NoArgsConstructor()
@AllArgsConstructor()
@ToString()
 
@Table(name="Categorie")
public class Categorie {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long idCat;
	@Column(name="nomCatégorie")
	private String nomCat;
	@JsonManagedReference
	@OneToMany(mappedBy="categorie")
	private List<Produit> produit;
	
	
	
	
	
	
	
	
	
	
}
