import { Injectable } from '@angular/core';
import {Movies} from '../app/Model/movie';
import {MOVIES} from '../app/Model/mock-movie'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  getMovies():Observable<Movies[]>{
    //manda un messaggio dopo la fetch dei movies
    this.messageService.add('movieService: fetched heroes')
    return of(MOVIES);
  }
  private log(message: string) {
    this.messageService.add(`MovieService: ${message}`);
  }
  private movieUrl ='http://www.omdbapi.com/?apikey=a0fe419&s=Game of thrones'
}
