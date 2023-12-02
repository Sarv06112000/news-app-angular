import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(category: string, country?: string): Observable<any> {
    if (!country) {
      return this.http.get<any>(environment.apiUrl + "country=in" + "&category=" + category + "&pageSize=" + environment.pageSize + "&apiKey=" + environment.apiKey);
    }
    else {
      return this.http.get<any>(environment.apiUrl + "country=" + country + "&category=" + category + "&pageSize=" + environment.pageSize + "&apiKey=" + environment.apiKey);
    }
  }
}
