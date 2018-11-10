import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})

export class DataService { 
  public API_KEY: string;    //// init var
  public selectGenresByID: Number;

  constructor(private http: HttpClient) {
    this.API_KEY = environment.API_KEY;
    // console.log('API_KEY:', this.API_KEY);
   }
  
  //// http request
  getNowPlayingMoviesList() {
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${ this.API_KEY }&language=en-US&page=1`)
  }

  getGenresList() {
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${ this.API_KEY }&language=en-US`)
  }

  getGenresListByID(id) {
    // console.log(`id: ${ id }`)
    return this.http.get(`https://api.themoviedb.org/3/movie/${ id }/similar?api_key=${ this.API_KEY }&language=en-US&page=1`)
  }

  postGenresByID(id) {
    // console.log(`id: ${ id }`);
    this.selectGenresByID = id;
  }

  getMovieInfo() {
    return this.http.get(`https://api.themoviedb.org/3/movie/${ this.selectGenresByID }?api_key=${ this.API_KEY }&language=en-US`)
  }

}
