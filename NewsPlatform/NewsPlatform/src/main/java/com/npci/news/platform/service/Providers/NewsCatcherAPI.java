package com.npci.news.platform.service.Providers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.jackson.JsonObjectSerializer;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.json.JsonMapper;
import com.npci.news.platform.entity.News;
import com.npci.news.platform.entity.NewsArticle;
import com.npci.news.platform.service.RestClient;

@Service
public class NewsCatcherAPI implements NewsAPIProvider{

	RestClient restClient;
	
	public NewsCatcherAPI() {
		this.restClient = new RestClient("https://api.newscatcherapi.com/v2/");
	}

	public List<NewsArticle> fetchNewsByTag(String tag) {
		String url=fetchNewsRequestFormatter(tag);
		 try {
			return bindfetchNewsResponse(this.restClient.get(url));
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	public String fetchNewsRequestFormatter(String tag) {
		String url="search?q="+tag;
		return url;
	}
	public List<NewsArticle> bindfetchNewsResponse(String response) throws JsonMappingException, JsonProcessingException {
		String str = response;
		ObjectMapper mapper = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_IGNORED_PROPERTIES, false);
		JsonNode node = mapper.readTree(str);
		JsonNode articleNode=node.get("articles");
		ArticleModel[] articles=mapper.treeToValue(articleNode, ArticleModel[].class);
		List<NewsArticle> newarticles= new ArrayList<>();
		for(ArticleModel article:articles) {
	    NewsArticle newarticle=new NewsArticle();
	    newarticle.title=article.title;
		newarticle.author=article.author;
		newarticle.imageUrl=article.media;
		newarticle.summary=article.summary;
		newarticle.time=article.published_date;
		newarticle.articleUrl=article.link;
		newarticle.id=article._id;
		newarticles.add(newarticle);
		}	
		return newarticles;
	}
}
