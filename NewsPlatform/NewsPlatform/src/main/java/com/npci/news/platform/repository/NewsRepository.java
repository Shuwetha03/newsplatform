package com.npci.news.platform.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.npci.news.platform.entity.News;
import com.npci.news.platform.entity.User;


@RepositoryRestResource(path="news")
@CrossOrigin("http://localhost:4200/")
public interface NewsRepository extends JpaRepository<News, Integer> {

	List<News> findBySid(@RequestParam("sid") int sid);
	List<News> findByNid(@RequestParam("nid") String nid);
	List<News> findByContentContainsIgnoreCase(@RequestParam("keyword") String keyword);
	News save(News news);
}
