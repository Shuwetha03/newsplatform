import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Admin } from '../common/admin';
import { Category } from '../common/category';
import { Comments } from '../common/comments';
import { Likes } from '../common/likes';
import { Subcategory } from '../common/subcategory';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class NewsmanagementService {

  constructor(private httpClient: HttpClient) { }

  adminUrl ="http://localhost:8080/api/admins"
  userUrl ="http://localhost:8080/api/users"
  categoryUrl="http://localhost:8080/api/categories"
  subcategoryUrl="http://localhost:8080/api/subcategories"
  commentUrl="http://localhost:8080/api/comments"
  likeUrl="http://localhost:8080/api/likes"

  

  loginUser(user:User):Observable<any>{
    return this.httpClient.post<any>(this.userUrl,user)

  }

  getAllAdmin() : Observable<Admin[]>{
    return this.httpClient.get<GetResponseAdmin>(this.adminUrl).pipe(map(response => response._embedded.admins))
  }

  saveAdmin(admin : Admin) : Observable<Admin>{
    console.log(admin)

    const httpOptions ={
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    };
    return this.httpClient.post<Admin>(this.adminUrl,admin,httpOptions)
    
  }

  updateAdmin(admin:Admin):Observable<Admin>{
    console.log(admin)
    const httpOptions={
      Headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'auth-token',
        'Acess-Control-Allow-Origin':'*'
        
      })
    };
          return this.httpClient.put<Admin>(this.adminUrl+`/${admin.aid}`,admin)
   }

   deleteAdmin(prodId:number):Observable<Admin>{
    const httpOptions={
      Headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'auth-token',
        'Acess-Control-Allow-Origin':'*'
        
      })
    };
    return this.httpClient.delete<Admin>(this.adminUrl+`/${prodId}`);

   }

   getAllUser() : Observable<User[]>{
    return this.httpClient.get<GetResponseUser>(this.userUrl).pipe(map(response => response._embedded.users))
  }

  saveUser(user : User) : Observable<User>{
    console.log(user)

    const httpOptions ={
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    };
    return this.httpClient.post<User>(this.userUrl,user,httpOptions)
    
  }

  updateUser(user:User):Observable<User>{
    console.log(user)
    const httpOptions={
      Headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'auth-token',
        'Acess-Control-Allow-Origin':'*'
        
      })
    };
          return this.httpClient.put<User>(this.userUrl+`/${user.uid}`,user)
   }

   deleteUser(prodId:number):Observable<User>{
    const httpOptions={
      Headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'auth-token',
        'Acess-Control-Allow-Origin':'*'
        
      })
    };
    return this.httpClient.delete<User>(this.userUrl+`/${prodId}`);

   }

   getAllCategory() : Observable<Category[]>{
    return this.httpClient.get<GetResponseCategory>(this.categoryUrl).pipe(map(response => response._embedded.categories))
  }

  saveCategory(category : Category) : Observable<Category>{
    console.log(category)

    const httpOptions ={
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    };
    return this.httpClient.post<Category>(this.categoryUrl,category,httpOptions)
    
  }

  updateCategory(category:Category):Observable<Category>{
    console.log(category)
    const httpOptions={
      Headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'auth-token',
        'Acess-Control-Allow-Origin':'*'
        
      })
    };
          return this.httpClient.put<Category>(this.categoryUrl+`/${category.id}`,category)
   }

   deleteCategory(prodId:number):Observable<Category>{
    const httpOptions={
      Headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'auth-token',
        'Acess-Control-Allow-Origin':'*'
        
      })
    };
    return this.httpClient.delete<Category>(this.categoryUrl+`/${prodId}`);

   }

   getAllComment() : Observable<Comments[]>{
    return this.httpClient.get<GetResponseComments>(this.commentUrl).pipe(map(response => response._embedded.commentses))
  }

  saveComment(comment : Comments) : Observable<Comments>{
    console.log(comment)

    const httpOptions ={
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    };
    return this.httpClient.post<Comments>(this.commentUrl,comment,httpOptions)
    
  }

  updateComment(comment:Comments):Observable<Comments>{
    console.log(comment)
    const httpOptions={
      Headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'auth-token',
        'Acess-Control-Allow-Origin':'*'
        
      })
    };
          return this.httpClient.put<Comments>(this.commentUrl+`/${comment.commentid}`,comment)
   }

   deleteComment(prodId:number):Observable<Comments>{
    const httpOptions={
      Headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'auth-token',
        'Acess-Control-Allow-Origin':'*'
        
      })
    };
    return this.httpClient.delete<Comments>(this.commentUrl+`/${prodId}`);

   }


  getAllSubcategory() : Observable<Subcategory[]>{
    return this.httpClient.get<GetResponseSubcategory>(this.subcategoryUrl).pipe(map(response => response._embedded.subcategories))
  }

  saveSubcategory(subcategory : Subcategory) : Observable<Subcategory>{
    console.log(subcategory)

    const httpOptions ={
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    };
    return this.httpClient.post<Subcategory>(this.subcategoryUrl,subcategory,httpOptions)
    
  }

  updateSubcategory(subcategory:Subcategory):Observable<Subcategory>{
    console.log(subcategory)
    const httpOptions={
      Headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'auth-token',
        'Acess-Control-Allow-Origin':'*'
        
      })
    };
          return this.httpClient.put<Subcategory>(this.subcategoryUrl+`/${subcategory.sid}`,subcategory)
   }

   deleteSubcategory(prodId:number):Observable<Subcategory>{
    const httpOptions={
      Headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'auth-token',
        'Acess-Control-Allow-Origin':'*'
        
      })
    };
    return this.httpClient.delete<Subcategory>(this.subcategoryUrl+`/${prodId}`);

   }

   getAllLike() : Observable<Likes[]>{
    return this.httpClient.get<GetResponseLikes>(this.likeUrl).pipe(map(response => response._embedded.likeses))
  }

  saveLike(like : Likes) : Observable<Likes>{
    console.log(like)

    const httpOptions ={
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    };
    return this.httpClient.post<Likes>(this.likeUrl,like,httpOptions)
    
  }

  updateLike(like:Likes):Observable<Likes>{
    console.log(like)
    const httpOptions={
      Headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'auth-token',
        'Acess-Control-Allow-Origin':'*'
        
      })
    };
          return this.httpClient.put<Likes>(this.likeUrl+`/${like.likeid}`,like)
   }

   deleteLike(prodId:number):Observable<Likes>{
    const httpOptions={
      Headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'auth-token',
        'Acess-Control-Allow-Origin':'*'
        
      })
    };
    return this.httpClient.delete<Likes>(this.likeUrl+`/${prodId}`);

   }

}

interface GetResponseAdmin{
  _embedded:{
    admins:Admin[]
  }
}

interface GetResponseUser{
  _embedded:{
    users:User[]
  }
}

interface GetResponseCategory{
  _embedded:{
    categories:Category[]
  }
}

interface GetResponseComments{
  _embedded:{
    commentses:Comments[]
  }
}

interface GetResponseSubcategory{
  _embedded:{
    subcategories:Subcategory[]
  }
}

interface GetResponseLikes{
  _embedded:{
    likeses:Likes[]
  }
}


