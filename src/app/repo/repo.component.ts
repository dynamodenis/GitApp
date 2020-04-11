import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../github-api.service';
import { Repo } from '../repo';
import { Username } from '../username';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  username:Username
  repos:Repo[]=[
    new Repo('','','','')
  ]
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
      this.repos=repos
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
      this.repos=repos
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
