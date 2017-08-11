import {Injectable} from "@angular/core";
import {WEATHER_ITEMS} from "./weather.data";
import {Headers, Http, Response} from "@angular/Http";
import {Observable} from "rxjs/Observable"
import {WeatherItem} from "./weather-item"
import 'rxjs/Rx';
@Injectable()
export class WeatherService
{
constructor (private _http: Http){

}

    getWeatherItems(){
        return WEATHER_ITEMS;
    }

    addWeatherItem(weatherItem: WeatherItem){
        WEATHER_ITEMS.push(weatherItem);
    }

    searchWeatherData(cityName: string): Observable<any>{
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&APPID=ca5eabb6ef3325bffb7ccfc26fa310fd')
                .map(responce => responce.json())
                .catch(error => {
                    console.error(error);
                    return Observable.throw(error.json())
                });
    }
}