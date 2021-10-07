import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiKey: string = environment.apiKey;
  private apiUrl: string = environment.apiUrl;
  private category: string = '';
  private apiCountry: string ='';

  constructor(private http: HttpClient) {}

  getArticles(apiCountry: string): Observable<any> {
    this.category = 'general';
    this.apiCountry = apiCountry;
    return this.http.get<any>(
      `${this.apiUrl}?country=${this.apiCountry}&category=${this.category}&apiKey=${this.apiKey}`
      );
  }

  getCategory(category: string, apiCountry:string): Observable<any> {
    this.category = 'general';
    return this.http.get<any>(
      `${this.apiUrl}?country=${apiCountry}&category=${category}&apiKey=${this.apiKey}`
    );
  }
}
