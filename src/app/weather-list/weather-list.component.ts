import {Component,OnInit} from '@angular/core';
import {WeatherItemComponent} from "../weather-item/weather-item.component";
import { WeatherItem } from "../weather-item";
import { NgFor } from '@angular/common';
import {WeatherService} from "../weather.service";
import {WEATHER_ITEMS} from "../weather.data";

@Component ({
    selector:'weather-list',
    templateUrl:'./weather-list.component.html',
    styleUrls:['./weather-item.css'],
    providers:[WeatherService]

})

export class WeatherListComponent implements OnInit {
    weatherItems: WeatherItem[];

    ngOnInit():any{
        this.weatherItems = WEATHER_ITEMS;
    }
}

// export class WeatherListComponent implements OnInit{
//     weatherItems:WeatherItem[];

//     constructor(private _weatherService: WeatherService){

//     }

//     ngOnInit():any{
//         this.weatherItems = this._weatherService.getWeatherItems();
//     }
// }
