import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { MoviesComponent } from './component/movies/movies.component';
import { GenresComponent } from './component/genres/genres.component';
import { MovieinfoComponent } from './component/movieinfo/movieinfo.component';
import { StatsComponent } from './component/stats/stats.component';


//// Route to your component
const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'genres',
    component: GenresComponent
  },
  {
    path: 'movies/:id',
    component: MovieinfoComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
