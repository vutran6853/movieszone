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
  users$: Object;
  error: any;

  constructor(
    private data: DataService
  ) { }

  //// LifeCycle Hook 
  ngOnInit() {
    this.data.getUser()
    .subscribe((response) => {
      console.log(response)
      this.users$ = response
      
    });
    
  }
  
  
}
