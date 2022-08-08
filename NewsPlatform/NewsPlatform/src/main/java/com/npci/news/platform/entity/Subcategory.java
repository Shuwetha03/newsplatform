package com.npci.news.platform.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="subcategory")
public class Subcategory {

	@Id
	@Column(name="sid")
	private int sid;
	
	@Column(name="cname")
	private String cname;
	
	@Column(name="id")
	private int id;
	
	public Subcategory() {
		
	}

	public Subcategory(int sid, String cname, int id) {
		super();
		this.sid = sid;
		this.cname = cname;
		this.id = id;
	}

	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	
}
