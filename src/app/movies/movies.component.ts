import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; //// http request 
import { Observable } from 'rxjs'; //// <-- return data from API in json format


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {

  users$: Object;


  constructor(
    private data: DataService
  ) { }

    //// LifeCycle Hook in Angular 
  ngOnInit() {
    this.data.getUser().subscribe(data => this.users$ = data)

  }

}
