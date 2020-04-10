import { Component, OnInit } from '@angular/core';
import { GithubApiService} from '../github-api.service';
import{ FormGroup,FormControl} from '@angular/forms';
import { Username } from '../username';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-gitapp',
  templateUrl: './gitapp.component.html',
  styleUrls: ['./gitapp.component.css']
})
export class GitappComponent implements OnInit {
//  CREATED A USER NAME OBJECT AND CRETED A A FUNCTION TO RETRIEVE THE INPUT DATA
  username= new FormGroup({
    user:new FormControl('')
  })
  nameSubmit(){
    console.log(this.username.value)
  }


//  CREATED A USER NAME OBJECT AND CRETED A A FUNCTION TO RETRIEVE THE INPUT DATA
  repositories=new FormGroup({
    repository:new FormControl('')
  })
  
  repoSubmit(){
    console.log(this.repositories.value)
  }
  // CONSTRACTOR TO RETIEVE ALL INJECTIONS
  constructor(private api:GithubApiService) { }
  users:Username;
  ngOnInit() {
    console.log(this.api.getUser())
    this.api.getUser().subscribe((response:any)=>{
      this.users=response.login;
      this.users=response.avatar_url
      console.log(this.users)
      console.log()
    })
    // this.users=this.api.getUser()
    
  }

  // STYLE SHEETS BINDING
  myStyles={
    'background-color':'black',
    'color':'white',
    'text-align':'center',
    'height': '15vh',
    'padding-top': '20px'
  }
  body={
    'font-size':'1.5em',
    'font-family':'italics'
  }
  form={
    'padding-top':'20px',
    'background-color':'burlywood',
    'padding':'60px'
  }
  footer={
    'background-color':'black',
    'color':'white',
    'text-align':'center',
  }
}
