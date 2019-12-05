import { Component, OnInit, Input} from '@angular/core';
import { Location } from '@angular/common';
import { MoviesService }  from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import {MovieDetail} from '../Model/movie-detail';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {
  movie:any= {};
  
  constructor(private route: ActivatedRoute,
    private location: Location,
    private movieService: MoviesService) {}
  
    getMovie(): void {      // restituisce i dettagli di un film specifico richiamando il metodo da MovieService
      const imdbID = this.route.snapshot.paramMap.get('imdbID');
      this.movieService.getMovie(imdbID)
        .subscribe(res => { this.movie = res});
    }
  ngOnInit() {
    this.getMovie();
  }
}
