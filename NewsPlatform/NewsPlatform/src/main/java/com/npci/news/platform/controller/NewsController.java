package com.npci.news.platform.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.npci.news.platform.entity.Comments;
import com.npci.news.platform.entity.News;
import com.npci.news.platform.entity.NewsArticle;
import com.npci.news.platform.service.NewsService;

@RestController
@CrossOrigin(origins="http://localhost:4200") 
public class NewsController {

	@Autowired
	NewsService service; 
	@RequestMapping("/article/{tag}")
	@ResponseBody
	public List<NewsArticle> fetchNewsByTag(@PathVariable String tag,@RequestParam(name="uid",required=false)Integer uid,@RequestParam(name="page",required=false)Integer page)
	{
	if(tag!=null && !tag.equals("")&&uid!=null) {
		return service.fetchNewsByTag(tag,uid); 
	}
	else if(tag!=null && !tag.equals("")&&uid==null) {
		return service.fetchNewsByTag(tag);
	}
	else {
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"tag should be passed");
	}
		
	}
	@PostMapping("/article/like/{uid}")
	@ResponseBody
	public void saveLike(@RequestBody NewsArticle newsArticle,@PathVariable(name="uid") Integer uid)
	{
	if(uid!=null&&newsArticle!=null) {
		service.saveLikeByUidAndNid(uid,newsArticle);
	}
	}
	
	@PostMapping("/article/comment/{uid}/{comment}")
	@ResponseBody
	public void saveComment(@RequestBody NewsArticle newsArticle,@PathVariable(name="uid") Integer uid,@PathVariable(name="comment") String comment)
	{
	if(uid!=null&&newsArticle!=null) {
		service.saveCommentByUidAndNid(uid,newsArticle,comment);
	}
	}
	@GetMapping("/article/comment/{nId}")
	@ResponseBody
	public List<Comments> getComments(@PathVariable(name="nId") String nId)
	{
	if(nId!=null) {
		return service.getCommentByNid(nId);
	}
	return null;
	}	
	
}
