package com.npci.news.platform.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.npci.news.platform.entity.User;

@RepositoryRestResource(path="users")
@CrossOrigin("http://localhost:4200/")
public interface UserRepository extends JpaRepository<User, Integer> {

	User findByUid(@RequestParam("uid") int uid);
	User findByEmailAndPassword(@RequestParam("email") String email,@RequestParam("email") String password);
	
	
}


