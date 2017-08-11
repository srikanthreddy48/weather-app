import { Component, Input } from '@angular/core';
import { WeatherItem } from "../weather-item";

@Component ({
    selector:'weather-item',
    templateUrl:'./weather-item.component.html',
    styleUrls:['./weather-item.component.css'],
   // inputs:['weatherItem: item']
})

export class WeatherItemComponent{
    @Input('item') weatherItem: WeatherItem;
    
    constructor(){
         //this.weatherItem= new WeatherItem('London','Rainy',4);
    }
}
