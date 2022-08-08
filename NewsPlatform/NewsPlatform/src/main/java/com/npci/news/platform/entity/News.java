package com.npci.news.platform.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="news")
public class News {

	@Id
	@Column(name="nid")
	private String nid;
	
	@Column(name="author")
	private String author;
	
	@Column(name="headlines")
	private String headlines;
	
	@Column(name="content")
	private String content;
	
	@Column(name="url")
	private String url;
	
	@Column(name="sid")
	private int sid;
	
	@Column(name="image")
	private String image;
	
	public News() {
		
	}

	


	public News(String nid, String author, String headlines, String content, String url, int sid, String image) {
		super();
		this.nid = nid;
		this.author = author;
		this.headlines = headlines;
		this.content = content;
		this.url = url;
		this.sid = sid;
		this.image = image;
	}





	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}





	public String getAuthor() {
		return author;
	}




	public void setAuthor(String author) {
		this.author = author;
	}




	public String getNid() {
		return nid;
	}

	public void setNid(String nid) {
		this.nid = nid;
	}

	public String getHeadlines() {
		return headlines;
	}

	public void setHeadlines(String headlines) {
		this.headlines = headlines;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}



}

