import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  constructor(private api:GithubApiService) { }
  user:any
  repos:any
  username:string
  ngOnInit() {
    
  //  console.log(this.user)
  }
  search(){
    console.log(this.username)
    this.api.updateUser(this.username)

    this.api.getUser().subscribe((res:any)=>{
      this.user=res
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
