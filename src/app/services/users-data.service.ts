import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
url = "https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }
  users()
  {
    return this.http.get(this.url)
  }
}
