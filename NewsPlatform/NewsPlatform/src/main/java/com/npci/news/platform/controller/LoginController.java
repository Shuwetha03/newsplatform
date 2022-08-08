package com.npci.news.platform.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.npci.news.platform.entity.User;
import com.npci.news.platform.repository.UserRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class LoginController 
{
	@Autowired
	UserRepository userRepository;
	
	private String name;

	
	@PostMapping("/login")
	public boolean isValid(HttpServletRequest request)
	{
//		String r=(String) request.getAttribute("email");
//        User u=userRepository.findByEmail((String) request.getAttribute("email"));		
//		if( u.getPassword().equals(request.getAttribute("password"))) {
//			return true;
//		}
		return false;
	}
	
}
