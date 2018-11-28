import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  
    getPostsData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/posts");
    }

  addPost(fullname: string,  username: string, email: string, phonenumber: string, description: string): Observable<any> {
    const post: Post = {fullname: fullname,  username: username, email: email, phonenumber: phonenumber, description: description};
    return this.http.post("http://localhost:8081/api/posts",post);
  }

  deletePost(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/posts/"+id);
  }

  getPost(id: String): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts/"+id);
  }

  updatePost(id: String, fullname: string,  username: string, email: string, phonenumber: string, description: string): Observable<any> {
    const post: Post = {fullname: fullname,  username: username, email: email, phonenumber: phonenumber, description: description};
    return this.http.put("http://localhost:8081/api/posts/"+id, post);
  }
}
