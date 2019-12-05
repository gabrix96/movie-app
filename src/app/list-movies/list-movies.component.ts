import { Component, OnInit } from '@angular/core';
import {MoviesService } from '../movies.service';
import { HttpClient } from '@angular/common/http';
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
    .subscribe(res=>{
      
      this.movies = res.Search;
    }
      );
  }
  
  ngOnInit() {
    this.getMovies();
  }
 
  
}
