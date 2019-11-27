import { Injectable } from '@angular/core';
import {Movies} from '../app/Model/movie';
import {MOVIES} from '../app/Model/mock-movie'
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }
  getMovies():Movies[]{
    return MOVIES;
  }
}
