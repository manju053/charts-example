import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OPEN_WEATHER_API_KEY } from 'src/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  baseUrl: string = 'https://api.openweathermap.org/data';
  appKey: string = OPEN_WEATHER_API_KEY;

  getTodayWeather(city: string) {
    return this._http.get(this.baseUrl + `/2.5/weather?q=${city}&units=metric&appid=${this.appKey}`);
  } 

  getFiveDaysWeather(city: string) {
    return this._http.get(this.baseUrl + `/2.5/forecast?q=${city}&units=metric&appid=${this.appKey}`);
  }
}
