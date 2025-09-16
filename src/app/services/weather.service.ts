import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey='cda29ae1d5d7290204e957dd53d5f775';


  constructor(private http:HttpClient) { }

  getweather(city: string)
  {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`)
  }
}
