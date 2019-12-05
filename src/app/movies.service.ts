import { Injectable } from '@angular/core';
import {Movies} from '../app/Model/movie';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movieUrl ='http://www.omdbapi.com/?apikey=a0fe419&s=terminator'; 
  private detailUrl = 'http://www.omdbapi.com/?apikey=a0fe419&i=';
  private searchUrl = 'http://www.omdbapi.com/?apikey=a0fe419&t=';
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getMovies():Observable<any>{
 
    return this.http.get<Movies[]>(this.movieUrl)
    .pipe(
      tap(_ => this.log('fetched Movies')),
      catchError(this.handleError<Movies[]>('getMovies', []))
    );
   
  }

  getMovie(imdbID:string):Observable<any>{
    const url = `${this.detailUrl}${imdbID}`;
    return this.http.get<any>(url)
    .pipe(
      tap(_=> this.log(`fetched movie id=${imdbID}`)),
      catchError(this.handleError<any>(`getMovie id=${imdbID}`))
    )
  }
  searchMovies(term: string): Observable<Movies[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Movies[]>(`${this.movieUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
     
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  
  private log(message: string) {
    this.messageService.add(`MoviesService: ${message}`);
  }
  
}
