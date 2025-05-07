import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LandComponent } from "./LandingPage/land/land.component";
import {UsersDataService} from './services/users-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule , LandComponent , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';

}
