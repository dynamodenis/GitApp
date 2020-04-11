import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import{ environment} from './../environments/environment';
import { Username } from './username'
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  users:Username;
  
    clientId='01f5aac10020e9251f16';
    clientSecret='194626a4360a191f8a4c9aba4f3b47f767e221d4'
   url="https://api.github.com/users/"
   user="dynamodenis?access_token="

   repos='repos/dynamodenis/Address-Book'
   token=environment.apiKey
   full:any=this.url+this.user+this.token
  //  "repository_url": "https://api.github.com/repos/{owner}/{repo}",
  userRepos=this.url+this.repos
  
  constructor(private http:HttpClient) {
    //  this.users=new Username('','','')
   }
   getUsername(){
    return this.http.get(this.full)
          // .map(res=>res.json)
   }





































  // getUser(){
  //   let promise= new Promise((resolve,reject)=>{
  //     this.http.get<apiInterface>(this.full).toPromise().then((response:any)=>{
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
}
