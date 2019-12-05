import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {MoviesService } from '../movies.service';
import {Movies} from '../Model/movie';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  
  movies$: Observable<any[]>;
  private searchTerms = new Subject<string>();
  constructor(private movieService: MoviesService ) { }
 
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.movies$ = this.searchTerms.pipe(
      debounceTime(300), 
      distinctUntilChanged(),
      switchMap((term: string) => this.movieService.searchMovies(term)),
    ) 
  }

}
