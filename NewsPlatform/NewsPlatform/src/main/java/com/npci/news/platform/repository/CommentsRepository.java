package com.npci.news.platform.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.util.Pair;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.npci.news.platform.entity.Comments;
import com.npci.news.platform.entity.NewsArticle;


@RepositoryRestResource(path="comments")
@CrossOrigin("http://localhost:4200/")
public interface CommentsRepository extends JpaRepository<Comments, Integer>  {

	List<Comments> findByNid(@RequestParam("nid") String nid);
	
	int countByNid(int nid);
	
	@Query("select c.nid,count(c.nid) from Comments as c group by c.nid order by c.nid desc")
    Optional<Object[]> countTotalCommentsesByNid();
    
    Comments save(Comments comments);
}
