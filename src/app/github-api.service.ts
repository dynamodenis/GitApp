import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
   url="https://api.github.com/"
   user="users/dynamodenis?access_token="
  //  repos='repos/'
   repos='repos/dynamodenis/Address-Book'
   token=" e8267966f5695fbda194b4d37334f2778cf8031f"
   full=this.url+this.user+this.token
  //  "repository_url": "https://api.github.com/repos/{owner}/{repo}",
  userRepos=this.url+this.repos
  
  constructor(private http:HttpClient) { }
}
