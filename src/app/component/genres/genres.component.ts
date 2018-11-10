import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';  //// http request 
import { Observable } from 'rxjs';  //// <-- return data from API in json format


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})

export class GenresComponent implements OnInit {
  ////  def your var local state
  public genresList: any;
  public selectGenresID: Number;
  public newGenresList: any;


  constructor(
    private data: DataService   //// http response data
  ) { }

  ngOnInit() {
    this.data.getGenresList()
    .subscribe((response) => {
      // console.log(response.genres)
      this.genresList = response.genres
    });

  }

  handleSelectGenres(id) {
    // console.log(`id: ${ id }`);
    this.selectGenresID = id
    console.log('selectGenresID:', this.selectGenresID);

  }

  ////  Get new Genres list by select item
  handleOnClick() {
    // console.log(this.selectGenresID);
    this.data.getGenresListByID(this.selectGenresID)
    .subscribe((response) => {
      console.log(response.results)
      this.newGenresList = response.results;
    });
  }

  handleMoreInfo(id) {
    // console.log(`id: ${ id }`);
    this.data.postGenresByID(id)
  }

}
