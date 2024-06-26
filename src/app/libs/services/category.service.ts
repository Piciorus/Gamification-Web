import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private basePath = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getAllCategories(): Observable<any> {
    return this.http.get(this.basePath + '/category');
  }
}
