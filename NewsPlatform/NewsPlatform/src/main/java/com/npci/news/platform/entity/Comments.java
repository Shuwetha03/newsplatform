package com.npci.news.platform.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="comments")
public class Comments {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="commentid")
	private int commentid;
	
	@Column(name="comment")
	private String comment;
	
	@Column(name="uid")
	private int uid;
	
	@Column(name="nid")
	private String nid;	
	
	@Column(name="uname")
	private String uname;
	
	public Comments() {
		
	}

	public Comments(int commentid, String comment, int uid, String nid,String uname) {
		super();
		this.commentid = commentid;
		this.comment = comment;
		this.uid = uid;
		this.nid = nid;
		this.uname= uname;
	}



	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public int getCommentid() {
		return commentid;
	}


	public void setCommentid(int commentid) {
		this.commentid = commentid;
	}


	public String getComment() {
		return comment;
	}


	public void setComment(String comment) {
		this.comment = comment;
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
