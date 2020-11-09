import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
  getUserDetails(userId: number):Observable<any>{
    return this.http.get("http://localhost:8080/api/userdetails/"+userId);
  }
}
