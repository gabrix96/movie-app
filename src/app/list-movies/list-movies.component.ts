import { Component, OnInit } from '@angular/core';
import {MOVIES} from '../Model/mock-movie';
import {MoviesService } from '../movies.service';
import {Movies} from '../Model/movie';
@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  

  constructor(private movieService: MoviesService) { }
  movies: Movies[];

  getMovies():void{
    this.movieService.getMovies()
    .subscribe(movies=>this.movies = movies);
  }
  ngOnInit() {
    this.getMovies();
  }
 
  
}
