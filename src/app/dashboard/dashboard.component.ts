import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [MenuComponent, SidenavComponent, CommonModule, NgIf, FormsModule]

})
export class DashboardComponent {
  /* location: any
  weatherData: any;
  

  constructor(private weatherService: WeatherService) {}
  
  getWeather(location: string) {
    this.weatherService.getCurrentWeather(location).subscribe((data) => {
      this.weatherData = data;
    });
  } */
}
