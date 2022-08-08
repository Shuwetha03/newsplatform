package com.npci.news.platform.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.npci.news.platform.entity.Subcategory;


@RepositoryRestResource(path="subcategories")
@CrossOrigin("http://localhost:4200/")
public interface SubcategoryRepository extends JpaRepository<Subcategory, Integer>{

	List<Subcategory> findById(@RequestParam("id") int id);
}
