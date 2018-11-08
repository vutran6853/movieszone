import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod';



@Injectable({
  providedIn: 'root'
})

export class DataService {
  public anime: string;

  constructor(private http: HttpClient) {
    this.anime = environment.anime;
    console.log(this.anime);
   }
  
  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

}
