import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Components
import { NewsComponent } from './pages/news/news.component';
import { NewContainerComponent } from './components/new-container/new-container.component';
import { TitleComponent } from './components/title/title.component';

// Modules
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Interceptor
import { InterceptorService } from './interceptors/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewContainerComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    NewContainerComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
