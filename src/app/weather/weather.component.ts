import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { WeatherData } from '../models/weather.model';
import { NgIf } from '@angular/common';
import {MatListModule} from '@angular/material/list';

import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { GetdataService } from '../services/getdata.service';
import { WeathercardComponent } from '../weathercard/weathercard.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgIf, MatListModule, MatIconModule, FormsModule, MatInputModule, MatFormFieldModule, WeathercardComponent]
})
export class WeatherComponent implements OnInit {

  weatherDataArray: WeatherData[] = [];

  constructor(
    private weatherService: WeatherService , 
    private http: HttpClient, 
    private getDataService: GetdataService
    ) {
  }

  weatherData?: WeatherData
  value: string = ""

  ngOnInit(): void {
    this.weatherService.getWeatherData('wellington')
    .subscribe({
      next: (response) => {
        this.weatherData=response
        console.log(this.weatherData);

        this.http.post('http://localhost:3000/weatherData', this.weatherData).subscribe({
        next: () => {
          console.log('Weather data saved in db.json using JSON Server');
        },
        error: (error) => {
          console.error('Error saving weather data:', error);
        }
      });
    
      }
    })
  }

  getCityData(value: string) {
    this.weatherService.getWeatherData(value)
    .subscribe({
      next: (response) => {
        this.weatherData=response
        console.log(this.weatherData);


        this.http.post('http://localhost:3000/weatherData', this.weatherData).subscribe({
        next: () => {
          console.log('Weather data saved in db.json using JSON Server');
          this.getDataService.getAllData().then((weatherDataArray: WeatherData[]) => {
            this.weatherDataArray = weatherDataArray;
            console.log(this.weatherDataArray)
          });
        },
        error: (error) => {
          console.error('Error saving weather data:', error);
        }
      })
      }
    })
  }
}

 

