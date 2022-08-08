package com.npci.news.platform.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admin")
public class Admin {

	@Id
	@Column(name="aid")
	private int aid;
	
	@Column(name="aname")
	private String aname;
	
	@Column(name="email")
	private String email;
	
	@Column(name="password")
	private String password;
	
	public Admin() {
		
	}

	public Admin(int aid, String aname, String email, String password) {
		super();
		this.aid = aid;
		this.aname = aname;
		this.email = email;
		this.password = password;
	}

	public int getAid() {
		return aid;
	}

	public void setAid(int aid) {
		this.aid = aid;
	}

	public String getAname() {
		return aname;
	}

	public void setName(String aname) {
		this.aname = aname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
