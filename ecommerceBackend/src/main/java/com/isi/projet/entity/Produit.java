package com.isi.projet.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity()
@Table(name="Produit")
@Getter()
@Setter()
@NoArgsConstructor()
@AllArgsConstructor()
@ToString()
public class Produit implements Serializable {	        
	         /**
	 * 
	 */   
	private static final long serialVersionUID = 1L;
			@Id
	         @GeneratedValue(strategy=GenerationType.IDENTITY)
	         private long id;
	         @Column(name="réference")
	         private String ref;
	         @Column(name="description")
	         private String description;
	         @Column(name="prix")
	         private float prix;
	         @JsonBackReference
	         @ManyToOne(fetch = FetchType.EAGER)
	         private Categorie categorie;
	         @Column(name="titre")
	         private String titre;
	         @Column(name="stock")
	         private int stock;
	         @Column(name="image")
	         private String image;
						
	         
}
