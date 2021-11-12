import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';
import { NewsServicesResp } from '../interface/new.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private readonly baseUrl = '/noticias';

  constructor(private readonly _http: HttpClient) { }

  getNews() {
    return this._http.get<NewsServicesResp>(this.baseUrl);
  }

}
