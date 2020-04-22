import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import{ environment} from './../environments/environment';
import { Username } from './username';
import { Repo } from './repo';
import {apiInterface} from './interface'
import { map,catchError } from 'rxjs/operators';
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable'

  
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
                .pipe(catchError(this.handleError))
    }

    getRepos(){
      return this.http.get<apiInterface>("https://api.github.com/users/" +this.user+'/repos'+"?"+this.access_token).pipe(map(res=>res))
    }

    updateUser(user:string){
     return this.user=user;
    }


    private handleError(errorResponse:HttpErrorResponse){
      if(errorResponse.error instanceof ErrorEvent){
        console.log('Client side error',errorResponse.error.message)
      }
      else {
        console.log('Server side error',errorResponse)
      }
      return ('Sorry some error occured')
    }
}
