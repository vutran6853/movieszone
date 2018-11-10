import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; //// http request 
import { Observable } from 'rxjs'; //// <-- return data from API in json format


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {
  ////  def your var local state
  nowPlayingMovies$: any;
  response: any;
  error: any;
  constructor(
    private data: DataService  //// http response data

  ) { }

  //// LifeCycle Hook 
  ngOnInit() {
    this.data.getNowPlayingMoviesList()
    .subscribe((response) => {
      console.log(response.results)
      this.nowPlayingMovies$ = response.results
    });

  }
}

