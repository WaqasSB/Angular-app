import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { WeatherComponent } from '../weather/weather.component';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { WeatherData } from '../models/weather.model';

@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.css'],
  standalone: true,
  imports:[MatCardModule,MatListModule, NgIf, CommonModule, WeatherComponent ]
})
export class WeathercardComponent {
  @Input() weatherData!: WeatherData

  constructor(){
  console.log(this.weatherData)
}
}