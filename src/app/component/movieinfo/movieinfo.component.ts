import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'; //// http request 
import { Observable } from 'rxjs';      //// <-- return data from API in json format


@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.component.html',
  styleUrls: ['./movieinfo.component.scss']
})

export class MovieinfoComponent implements OnInit {
  public moviesInfo: any;

  constructor(
    private data: DataService   //// http response data
  ) { }

  ngOnInit() {
    console.log(this);
    this.data.getMovieInfo()
    .subscribe((response) => {
      console.log(response)
      this.moviesInfo = response
    });
  }

}
