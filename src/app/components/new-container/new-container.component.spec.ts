import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NewContainerComponent } from './new-container.component';
import { NewsService } from 'src/app/services/news.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { itemMock } from 'src/app/Mocks/mocks';

describe('NewContainerComponent', () => {
  let component: NewContainerComponent;
  let fixture: ComponentFixture<NewContainerComponent>;
  let newService: NewsService;
  let sweetAlert: SweetAlertService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewContainerComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContainerComponent);
    newService = TestBed.inject(NewsService);
    sweetAlert = TestBed.inject(SweetAlertService);
    component = fixture.componentInstance;
    component.item = itemMock;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#editNew should call #_newService.editNew', () => {
    const spy = spyOn(newService, 'editNew');
    component.editNew(itemMock);
    expect(spy).toHaveBeenCalledWith(itemMock);
  });


});
