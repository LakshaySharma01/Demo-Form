import { Component, Input, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  @Input() searchTerm: string = '';
  users: any[] = [];

  // users: any;
  constructor(private userData: UsersDataService) {}
  public ngOnInit(): void {
    this.userData.users().subscribe({
      next: (data) => {
        this.users = data as any;
      },
      error: (err) => {
        console.log('Error at getting data');
      },
    });
  }
  get filteredUsers() {
    if (!this.searchTerm) return this.users;
    const term = this.searchTerm.toLowerCase();
    return this.users.filter(user =>
      user.username?.toLowerCase().includes(term) ||
      user.email?.toLowerCase().includes(term)
    );
  }
}
