

import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from '../login/login.component';

/**
 * @title Basic cards
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [MatCardModule,LoginComponent],
})
export class CardComponent {}
