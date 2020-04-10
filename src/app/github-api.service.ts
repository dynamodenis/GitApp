import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { ThrowStmt } from '@angular/compiler';
import{ environment} from './../environments/environment';
import { Username } from './username'
import { Observable } from 'rxjs';
import{ apiInterface} from './interface'

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  users:Username;
  
   url="https://api.github.com/"
   user="users/dynamodenis?access_token="
  //  repos='repos/'
   repos='repos/dynamodenis/Address-Book'
   token=environment.apiKey
   full=this.url+this.user+this.token
  //  "repository_url": "https://api.github.com/repos/{owner}/{repo}",
  userRepos=this.url+this.repos
  
  constructor(private http:HttpClient) {
     this.users=new Username('','','')
   }
  // getUser(){
  //   let promise= new Promise((resolve,reject)=>{
  //     this.http.get<apiInterface>(this.full).toPromise().then(response=>{
  //       this.users.username=response.login,
  //       this.users.repo=response.repos_url,
  //       this.users.image=response.avatar_url,
  //       resolve()
  //     },
  //     error=>{
  //       this.users.username="Couldn't find user."
  //       reject(error)
  //     })
  //   })
  //   return promise;
  // }
  getUser(){
   return  this.http.get<apiInterface>(this.full)
  }
}
