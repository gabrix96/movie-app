import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ListMoviesComponent} from './list-movies/list-movies.component'
import {DetailMovieComponent } from './detail-movie/detail-movie.component'

const routes: Routes = [
  { path: '', redirectTo: 'list-movies', pathMatch: 'full' },
  { path: 'list-movies', component: ListMoviesComponent },
  { path: 'detail-movie/:imdbID', component: DetailMovieComponent }
];
@NgModule({
  declarations: [],
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
