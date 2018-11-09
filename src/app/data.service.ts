import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})

export class DataService { 
  public API_KEY: string;    //// init var 

  constructor(private http: HttpClient) {
    this.API_KEY = environment.API_KEY;
    // console.log('API_KEY:', this.API_KEY);
   }
  
  //// http request
  getNowPlayingMoviesList() {
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${ this.API_KEY }&language=en-US&page=1`)
  }

}
