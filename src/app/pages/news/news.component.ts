import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { New, NewFiltered, NewsServicesResp } from 'src/app/interface/new.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news$: any;

  constructor(private readonly _news: NewsService) { }

  ngOnInit(): void {
    this.getNewsFromService();
  }
  
  private getNewsFromService() {
    this.news$ = this._news.getNews().pipe(
      pluck<NewsServicesResp, New[]>('noticias'),
      // map( ), TODO: Implements map to filter usless attributes
      tap(
        console.log
      )
    ).subscribe()
  }

}
