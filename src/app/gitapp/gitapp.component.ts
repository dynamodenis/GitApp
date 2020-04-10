import { Component, OnInit } from '@angular/core';
import { GithubApiService} from '../github-api.service';

@Component({
  selector: 'app-gitapp',
  templateUrl: './gitapp.component.html',
  styleUrls: ['./gitapp.component.css']
})
export class GitappComponent implements OnInit {

  constructor(private api:GithubApiService) { }

  ngOnInit() {
    console.log(this.api.userRepos)
  }
  myStyles={
    'background-color':'black',
    'color':'white',
    'text-align':'center',
    'height': '15vh',
    'padding-top': '20px'
  }
  footer={
    'background-color':'black',
    'color':'white',
    'text-align':'center',
  }
}
