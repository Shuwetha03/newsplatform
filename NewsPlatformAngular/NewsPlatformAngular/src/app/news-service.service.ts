import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from './category';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { SubCategory } from './sub-category';
import { NewsArticle } from 'src/Models/NewsArticle.model';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  isUserLoggedIn = false;
  newSearch=new BehaviorSubject(' ');
  categoryurl = "http://localhost:8080/api/categories"
  subcategoryurl = "http://localhost:8080/api/subcategories"
  usersurl = "http://localhost:8080/api/users"
  newsurl ="http://localhost:8080/article";
  
  constructor(private httpclient : HttpClient) { }
  getAllCategory() : Observable<Category[]>{
    return this.httpclient.get<getCategoryResponse>(this.categoryurl).pipe(map(response => response._embedded.categories));
}
getAllSubCategory() : Observable<SubCategory[]>{
  return this.httpclient.get<getSubCategoryResponse>(this.subcategoryurl).pipe(map(response => response._embedded.subcategories));
}
getNewsByTag(tag:string,uid?:number) : Observable<NewsArticle[]>{ 
  if(Number.isNaN(uid)){
  return this.httpclient.get<NewsArticle[]>(this.newsurl+'/'+tag);
  }
  else
  return this.httpclient.get<NewsArticle[]>(this.newsurl+'/'+tag+'?uid='+uid);
}
searchNews(searchEntity:string){
  this.newSearch.next(searchEntity);
}


addLike(uid:number,newsArticle:NewsArticle){
  return this.httpclient.post(this.newsurl+'/like/'+uid,newsArticle);

}

addComment(uid:number,newsArticle:NewsArticle,comment:string){
  return this.httpclient.post(this.newsurl+'/comment/'+uid+"/"+comment,newsArticle);
}
getComments(nid:string){
  return this.httpclient.get(this.newsurl+'/comment/'+nid);
}
}
interface getCategoryResponse{
  _embedded:{
     categories: Category[]
  }
}
interface getSubCategoryResponse{
  _embedded:{
     subcategories: SubCategory[]
  }
}
