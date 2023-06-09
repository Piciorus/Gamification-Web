import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BadgeService {
  private basePath = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getBadgesFromUser(idUser: number): Observable<any> {
    return this.http.get(this.basePath + '/badge/getBadgesByUserId/' + idUser);
  }

  public getAllBadges(): Observable<any> {
    return this.http.get(this.basePath + '/badge/getAllBadges');
  }
}
