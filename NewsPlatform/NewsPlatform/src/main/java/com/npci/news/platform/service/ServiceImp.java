package com.npci.news.platform.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npci.news.platform.entity.Comments;
import com.npci.news.platform.entity.Likes;
import com.npci.news.platform.entity.News;
import com.npci.news.platform.entity.NewsArticle;
import com.npci.news.platform.repository.CommentsRepository;
import com.npci.news.platform.repository.LikesRepository;
import com.npci.news.platform.repository.NewsRepository;
import com.npci.news.platform.repository.UserRepository;
import com.npci.news.platform.service.Providers.NewsAPIProvider;

@Service
public class ServiceImp implements NewsService{
	@Autowired
	NewsAPIProvider newsAPIProvider;
	@Autowired
	LikesRepository likesRepository;
	@Autowired
	NewsRepository newsRepository;
	@Autowired
	CommentsRepository commentsRepository;
	@Autowired
	UserRepository userRepository;
	
	public List<NewsArticle> fetchNewsByTag(String tag) {
	List<NewsArticle> articles=newsAPIProvider.fetchNewsByTag(tag);
	articles.forEach((NewsArticle article)->{
		article.likes =getLikesCount(article.id);
		article.comments=getCommentByNid(article.id); 
	});
	return articles;
	}
	 
	public List<NewsArticle> fetchNewsByTag(String tag,Integer id) {
	List<NewsArticle> articles=newsAPIProvider.fetchNewsByTag(tag);
	articles.forEach((NewsArticle article)->{
		article.likes =getLikesCount(article.id);
		article.isLiked=getIfUserLiked(id,article.id);
		article.comments=getCommentByNid(article.id); 
	});
	return articles;
	}

	
private boolean getIfUserLiked(Integer usid,String ArticleId) {
	List<Likes> likes = new ArrayList<>();
	likes=likesRepository.findByUidAndNid(usid, ArticleId);
	if(!likes.isEmpty()) {
	return true ;
	}
	return false;
}
private int getLikesCount(String id) {
		return likesRepository.countByNid(id);
	}
public void saveLikeByUidAndNid(Integer uid,NewsArticle Article) {
	Likes like = new Likes();
	like.setUid(uid);
	like.setNid(Article.id);
	if(!newsRepository.findByNid(Article.id).isEmpty()) {
	likesRepository.save(like);
	} 
	else {
		News news=new News();
		news.setHeadlines(Article.title);
		news.setContent(Article.summary);
		news.setNid(Article.id);
		newsRepository.save(news);
		likesRepository.save(like);
	}
}

public void saveCommentByUidAndNid(Integer uid,NewsArticle article,String userComment) {
	Comments comment=new Comments();
	comment.setNid(article.id);
	comment.setComment(userComment);
	comment.setUid(uid);
	comment.setUname(userRepository.findByUid(uid).getName());
	if(!newsRepository.findByNid(article.id).isEmpty()) {
		commentsRepository.save(comment);
		} 
		else {
			News news=new News();
			news.setHeadlines(article.title);
			news.setContent(article.summary);
			news.setNid(article.id);
			newsRepository.save(news);
			commentsRepository.save(comment);
		}
} 
public List<Comments> getCommentByNid(String Nid) { 
	return commentsRepository.findByNid(Nid);
}

}

