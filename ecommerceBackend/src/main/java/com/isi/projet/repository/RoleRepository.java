package com.isi.projet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isi.projet.entity.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role,Integer>{

}
