package com.isi.projet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isi.projet.entity.Client;


@Repository
public interface UserRepository extends JpaRepository<Client,Long>{

}
