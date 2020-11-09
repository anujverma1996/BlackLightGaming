import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MatchdetailsService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  getMatchDetails(userId):Observable<any>{
    return this.http.get("http://localhost:8080/api/matchdetails/"+userId);
  }
}
