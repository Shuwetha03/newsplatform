package com.npci.news.platform.entity;

import java.util.List;

public class NewsArticle {
	public String id;
	public String title;
	public String summary;
	public String articleUrl;
	public String author;
	public String imageUrl;
	public String time;
	public int likes;
	public List<Comments> comments;
	public boolean isLiked;	
}
