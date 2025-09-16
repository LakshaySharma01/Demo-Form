import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-land',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './land.component.html',
  styleUrl: './land.component.css'
})
export class LandComponent {

}
