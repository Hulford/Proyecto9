import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-reques.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

private http = inject(HttpClient);
private baseUrl = 'https://reqres.in/api/users/2';

getUserById(id: number): Observable<User>{
  return this.http.get<SingleUserResponse>(`${this.baseUrl}/${id}`)
  .pipe(
    map(response => response.data),
    tap(console.log),

    );

}
}
