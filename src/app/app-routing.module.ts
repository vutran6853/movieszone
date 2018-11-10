import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { GenresComponent } from './genres/genres.component';

import { from } from 'rxjs';

//// Route to your component
const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'genres',
    component: GenresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
