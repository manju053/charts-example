import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-fivedays-weather',
  templateUrl: './fivedays-weather.component.html',
  styleUrls: ['./fivedays-weather.component.css']
})
export class FivedaysWeatherComponent implements OnInit, OnChanges {

  constructor(private _apiService: ApiService) { }

  weatherObject = [];
  cityDetails;
  @Input() city: string;

  ngOnInit(): void {
    this._apiService.getFiveDaysWeather(this.city).subscribe(weatherData => {
      console.log("Today Weather", weatherData);
      this.cityDetails = weatherData['city'];
      this.weatherObject = weatherData['list'].filter(item => {
        return item.dt_txt.includes("18:00:00")
      });

      console.log("five days weather", this.weatherObject);
    });
  }

  ngOnChanges() {
    this._apiService.getFiveDaysWeather(this.city).subscribe(weatherData => {
      console.log("Today Weather", weatherData);
      this.cityDetails = weatherData['city'];
      this.weatherObject = weatherData['list'].filter(item => {
        return item.dt_txt.includes("18:00:00")
      });

      console.log("five days weather", this.weatherObject);
    });
  }

}
