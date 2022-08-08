package com.npci.news.platform.service;

import java.util.List;

import com.npci.news.platform.entity.Comments;
import com.npci.news.platform.entity.NewsArticle;

public interface NewsService {
	public List<NewsArticle> fetchNewsByTag(String str);

	public List<NewsArticle> fetchNewsByTag(String tag, Integer uid);
	public void saveLikeByUidAndNid(Integer uid,NewsArticle Article);
	public void saveCommentByUidAndNid(Integer uid,NewsArticle article,String userComment);
	public List<Comments> getCommentByNid(String Nid);
}
 