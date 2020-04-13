import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import{ environment} from './../environments/environment';
import { Username } from './username';
import { Repo } from './repo';
import {Observable} from 'rxjs';
import {apiInterface} from './interface'
import { map } from 'rxjs/operators';

  
@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
     client_id=environment.client_id;
     client_secret=environment.client_secret;
     access_token=environment.access_token;
     CALLBACK='http://localhost:4200/user'
     url='https://api.github.com/users/';
     user='dynamodenis';
  // apikey=environment.apiKey

  username:Username;
  repo:Repo;

    constructor(private http:HttpClient){
      this.username=new Username('','','','','','','')
    }

    getUser(){
     
      return this.http.get<apiInterface>("https://api.github.com/users/" +this.user+"?"+this.access_token).pipe(map(res=>res))
    }

    getRepos(){
      return this.http.get<apiInterface>("https://api.github.com/users/" +this.user+'/repos'+"?"+this.access_token).pipe(map(res=>res))
    }

    updateUser(user:string){
     return this.user=user;
    }



  // getUser(){
  //   let promise= new Promise((resolve,reject)=>{
  //     this.http.get<apiInterface>(this.url+ this.user+ this.apikey).toPromise().then((response:any)=>{
  //       this.username.image=response.avatar_url,
  //       this.username.username=response.login,
  //       this.username.repos=response.public_repos,
  //       this.username.followers=response.followers,
  //       this.username.following=response.following,
  //       this.username.created=response.created_at,

  //       resolve()
  //     },
  //     error=>{
  //       this.username.username="Couldn't find user."
  //       reject(error)
  //     })
  //   })
  //   return promise;
  // }


  // getRepos(){
  //    let promise= new Promise((resolve,reject)=>{
  //     this.http.get<apiInterface>(this.url+ this.user+ this.apikey+ '/repos').toPromise().then((response:any)=>{
  //       this.repo.name=response.name,
  //       this.repo.description=response.description,
  //       this.repo.watched=response.watched,
  //       this.repo.cloned=response.followers,

  //       resolve()
  //     },
  //     error=>{
  //       reject(error)
  //     })
  //   })
  //   return promise;
  // }
}
