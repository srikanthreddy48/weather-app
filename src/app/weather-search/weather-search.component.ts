
import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import {WeatherService} from "../weather.service";
import {WeatherItem} from "../weather-item";
import { HttpModule } from '@angular/http';
@Component({
    selector:'weather-search',
    templateUrl:'./weather-search.component.html',
    providers: [WeatherService]
})
// export class WeatherSearchComponent {
//     onSubmit(form:HTMLTemplateElement){
//         console.log(form);
        
//     }
// }
export class WeatherSearchComponent {
    
    constructor(private _weatherService: WeatherService){

    }

    onSubmit(form: NgForm){
        this._weatherService.searchWeatherData(form.value.location)
        .subscribe(
            data => {
                const weatherItem = new WeatherItem(data.name,data.weather[0].description, data.main.humidity);
                this._weatherService.addWeatherItem(weatherItem);
            }
        );
    }

}