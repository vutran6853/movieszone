import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MoviesComponent } from './component/movies/movies.component';
import { GenresComponent } from './component/genres/genres.component';
import { MovieinfoComponent } from './component/movieinfo/movieinfo.component';
import { StatsComponent } from './component/stats/stats.component';



//// declara for View 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    GenresComponent,
    MovieinfoComponent,
    StatsComponent
  ],
  imports: [                  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]  //// Entry point of app
})
export class AppModule { }
