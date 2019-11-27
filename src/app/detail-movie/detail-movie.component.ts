import { Component, OnInit } from '@angular/core';
import {DETAIL} from '../Model/mock-movie-detail';
@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {

  constructor() { }
 details = DETAIL;
  ngOnInit() {
  }

}
