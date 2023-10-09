import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  url = 'http://localhost:3000/weatherData';

  async getAllData(): Promise<WeatherData[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
}
