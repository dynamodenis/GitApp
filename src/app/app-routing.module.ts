import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitappComponent } from './gitapp/gitapp.component'
import{ UsernameComponent } from './username/username.component';
import{ RepoComponent } from './repo/repo.component'


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home' , component:GitappComponent },
  {path:'user' , component:UsernameComponent},
  {path:'repos' , component: RepoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
