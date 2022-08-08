package com.npci.news.platform.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="likes")
public class Likes {


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="likeid")
	private int likeid;
	
	@Column(name="uid")
	private int uid;
	
	
	@Column(name="nid")
	private String nid;
	
	public Likes() {
		
	}

	public Likes(int likeid, int uid,String nid) {
		super();
		this.likeid = likeid;
		this.uid = uid;
		this.nid = nid;
	}

	public int getLikeid() {
		return likeid;
	}

	public void setLikeid(int likeid) {
		this.likeid = likeid;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getNid() {
		return nid;
	}

	public void setNid(String nid) {
		this.nid = nid;
	}
	
	
	
}
