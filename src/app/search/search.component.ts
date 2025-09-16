import { Component } from '@angular/core';
import { UserListComponent  } from '../user-list/user-list.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, UserListComponent ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';
}
