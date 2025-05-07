import { Component } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
 users : any;
  constructor(private userData:UsersDataService)
  {
    userData.users().subscribe((data)=>
      {
        console.warn("data",data);
        this.users=data
      }
      );
  }
}
