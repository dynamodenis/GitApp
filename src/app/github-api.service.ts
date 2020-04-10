import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { ThrowStmt } from '@angular/compiler';
import{ environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
   url="https://api.github.com/"
   user="users/dynamodenis?access_token="
  //  repos='repos/'
   repos='repos/dynamodenis/Address-Book'
   token=environment.apiKey
   full=this.url+this.user+this.token
  //  "repository_url": "https://api.github.com/repos/{owner}/{repo}",
  userRepos=this.url+this.repos
  
  constructor(private http:HttpClient) { }
}
