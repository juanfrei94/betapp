import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewsComponent } from './news.component';
import { NewsService } from 'src/app/services/news.service';
import { itemMock, respServiceMock } from 'src/app/Mocks/mocks';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  let newService: NewsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    newService = TestBed.inject(NewsService);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('localStorage.getItem should have items and execute #getNewsFromDatabase', () => {
    const mock = JSON.stringify(itemMock);
    localStorage.setItem('database',mock);
    component.ngOnInit();
  });

  it('should set newItems', () => {
    localStorage.clear();
    const spy = spyOn(newService, 'getNews').and.returnValue(of(respServiceMock));
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });


});
