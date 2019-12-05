import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesComponent } from './messages/messages.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MoviesService } from './movies.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    ListMoviesComponent,
    DetailMovieComponent,
    MessagesComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
   
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
