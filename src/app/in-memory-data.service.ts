import { Injectable } from '@angular/core';
import {Movies} from '../app/Model/movie';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
createDb(){
  const movies = [
    {
      title: "Stranger Things",
      year: "2016–",
      imdbID: "tt4574334",
      type: "series",
      poster: "https://m.media-amazon.com/images/M/MV5BZGExYjQzNTQtNGNhMi00YmY1LTlhY2MtMTRjODg3MjU4YTAyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
      title: "Avengers: Endgame",
      year: "2019",
      imdbID: "tt4154796",
      type: "movie",
      poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  },
  {
      title: "Terminator 3",
      year: "2003",
      imdbID: "tt0181852",
      type: "movie",
      poster: "https://m.media-amazon.com/images/M/MV5BMTk5NzM1ODgyN15BMl5BanBnXkFtZTcwMzA5MjAzMw@@._V1_SX300.jpg"
  },
  {
      title: "Lucifer",
      year: "2015–",
      imdbID: "tt4052886",
      type: "series",
      poster: "https://m.media-amazon.com/images/M/MV5BZTA2NTBkYWUtMzM4Zi00YzhlLTk4NWItY2U1ODczNDMyNDAzXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg"
  },
  {
      title: "Game of Thrones",
      year: "2011–",
      imdbID: "tt0944947",
      type: "series",
      poster: "https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SX300.jpg"
  }
  ];
  return {movies};
}

}
