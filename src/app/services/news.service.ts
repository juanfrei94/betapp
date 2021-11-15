import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { New, NewFiltered, NewsServicesResp } from '../interface/new.interface';
import { pluck } from 'rxjs/operators';
import { SweetAlertService } from './sweet-alert.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private readonly baseUrl = '/noticias';

  constructor(
    private readonly _http: HttpClient,
    private readonly _sweetAlert: SweetAlertService
  ) { }

  getNews() {
    return this._http.get<NewsServicesResp>(this.baseUrl).pipe(
      pluck<NewsServicesResp, New[]>('noticias')
    );
  }

  deleteNew(id: number){
    const actualNews = this.getLocalStorage();
    const newsAfterDelete = actualNews.filter( newItem => newItem.id !== id );
    this.setLocalStorage(newsAfterDelete);
  }

  async editNew(newItem: New) {
    const db = this.getLocalStorage();
    const indexOfModifiedItem = db.findIndex(searchedItem => searchedItem.id === newItem.id);
    const modifiedItem: any = await this._sweetAlert.editNew(newItem); 
    db.splice(indexOfModifiedItem,1,modifiedItem);
    this.setLocalStorage(db);
    setTimeout(() => {
      location.reload();
    },1500)
  }

  setLocalStorage(news: New[]) {
    const toStringNews = JSON.stringify(news);
    localStorage.setItem('database', toStringNews);
  }

  getLocalStorage(): New[] {
    const toJsonNews = JSON.parse(localStorage.getItem('database') || '{}');
    return toJsonNews;
  }

  deleteUslessProperties(element: New) {
    delete element.gallery_id;
    delete element.created_at;
    delete element.order_view;
    delete element.updated_at;
    delete element.imagen_content;
    delete element.visible;
    delete element.subtitulo;
  }

}
