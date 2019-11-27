import { Component, OnInit } from '@angular/core';

import {MOVIES} from '../Model/mock-movie';
@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  movies = MOVIES;
  constructor() {}
  
  ngOnInit() {
  }

}
