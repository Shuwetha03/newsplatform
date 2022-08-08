package com.npci.news.platform.service.Providers;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown=true)
public class ArticleModel {
	public String title;
	public String author;
	public String link;
	public String published_date;
	public String summary;
	public String _id;
	public String media;
}
