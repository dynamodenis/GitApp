import { Component, OnInit, Input } from '@angular/core';
import { GithubApiService } from '../github-api.service';
import { Repo } from '../repo';
import { Username } from '../username';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
 @Input() username:Username
  // repos:Repo[]=[
  //   new Repo('','','','')
  // ]
  repos:Repo[]
  constructor(private api:GithubApiService) { }

  ngOnInit() {
  }
  search(){
    console.log(this.repos)
    let user:any=this.username
    this.api.updateUser(user)

    this.api.getUser().subscribe((res:any)=>{
      this.repos=res
    })
    this.api.getRepos().subscribe((repos:any)=>{
      // this.repos=repos
      this.repos[0]=repos.name;
      this.repos[1]=repos.description;
      this.repos[2]=repos.watchers;
      this.repos[3]=repos.forks;
      this.repos.push(repos)
    })
  }

  submit(){
     console.log(this.repos)
     let user:any=this.username
    this.api.updateUser(user)

    this.api.getUser().subscribe((res:any)=>{
      this.repos=res
    })
    this.api.getRepos().subscribe((repos:any)=>{
      this.repos[0]=repos.name;
      this.repos[1]=repos.description;
      this.repos[2]=repos.watchers;
      this.repos[3]=repos.forks
      this.repos.push(repos)

    })
  }

  myStyles={
    'background-color':'black',
    'color':'white',
    'text-align':'center',
    'height': '15vh',
    'padding-top': '20px'
  }
}
