import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { New } from 'src/app/interface/new.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news$ = new Observable<New[]>();
  newsItems: New[] = [];
  isFromDb = false;

  constructor(private readonly _newsService: NewsService) { }

  ngOnInit(): void {
    localStorage.getItem('database')
      ? this.getNewsFromDatabase()
      : this.getNewsFromService();
  }

  private getNewsFromService() {
    this.news$ = this._newsService.getNews().pipe(
      tap((resp: New[]) => {
        resp.forEach(this._newsService.deleteUslessProperties);
        this.newsItems = resp;
        this._newsService.setLocalStorage(this.newsItems);
      })
    );
  }

  private getNewsFromDatabase() {
    this.isFromDb = true;
    this.newsItems = this._newsService.getLocalStorage();
  }

}
