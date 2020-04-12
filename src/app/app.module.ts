import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }  from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitappComponent } from './gitapp/gitapp.component';
import { UsernameComponent } from './username/username.component';
import { RepoComponent } from './repo/repo.component';
import { GithubApiService } from './github-api.service'
import { from } from 'rxjs';
import { CustomDirective } from './custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    GitappComponent,
    UsernameComponent,
    RepoComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
