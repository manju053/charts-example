import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.css']
})
export class TodayWeatherComponent implements OnInit, OnChanges {

  constructor(private _apiService: ApiService) { }
  weatherObject: any;
  @Input() city: string;
  ngOnInit(): void {
    this._apiService.getTodayWeather(this.city).subscribe(weatherData => {
      this.weatherObject = weatherData;
    });
  }

  ngOnChanges() {
    this._apiService.getTodayWeather(this.city).subscribe(weatherData => {
      this.weatherObject = weatherData;
    });
  }


}
