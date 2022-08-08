package com.npci.news.platform.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.news.platform.entity.Likes;

@RepositoryRestResource(path="likes")
@CrossOrigin("http://localhost:4200/")
public interface LikesRepository extends JpaRepository<Likes, Integer> {
     
	int countByNid(String id);
	
	@Query("select c.nid,count(c.nid) from Likes as c group by c.nid order by c.nid desc")
    Optional<Object[]> countTotalLikesesByNid();
    
	List<Likes> findByUidAndNid(@Param("uid")Integer usid, @Param("nid")String articleId);
	
	Likes save(Likes like);
    
}
