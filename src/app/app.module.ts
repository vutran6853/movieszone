import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';

import { HttpClientModule } from '@angular/common/http';
import { GenresComponent } from './genres/genres.component';


//// declara for View 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    GenresComponent
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
