import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
// import { WeatherService } from "./weather.service";
import { Headers, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule       
  ], 
  providers: [],
  bootstrap: [AppComponent]
})   
export class AppModule { }
