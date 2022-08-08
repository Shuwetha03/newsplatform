package com.npci.news.platform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.news.platform.entity.Admin;


@RepositoryRestResource(path="admins")
@CrossOrigin("http://localhost:4200/")
public interface AdminRepository extends JpaRepository<Admin, Integer> {

}
