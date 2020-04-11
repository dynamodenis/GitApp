import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import{ environment} from './../environments/environment';
import { Username } from './username'
import {Observable} from 'rxjs';
import {apiInterface} from './interface'
import { map } from 'rxjs/operators';

  
@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
    url='https://api.github.com/users/';
   user='dynamodenis';
    secretId='01f5aac10020e9251f16';
    clientSecret='194626a4360a191f8a4c9aba4f3b47f767e221d4';

    constructor(private http:HttpClient){
    }

    getUser(){
     
      return this.http.get("https://api.github.com/users/" +this.user)
    }

    getRepos(){
      return this.http.get("https://api.github.com/users/" +this.user+'/repos')
    }

    updateUser(user:string){
     return this.user=user;
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
