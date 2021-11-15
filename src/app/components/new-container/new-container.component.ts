import { Component, Input, OnInit } from '@angular/core';
import { New } from 'src/app/interface/new.interface';
import { NewsService } from 'src/app/services/news.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-new-container',
  templateUrl: './new-container.component.html',
  styleUrls: ['./new-container.component.scss']
})
export class NewContainerComponent implements OnInit {

  @Input() item!: New;
  itemContentString: string = '';

  constructor(
    private readonly _newService: NewsService,
    private readonly _sweetAlert: SweetAlertService,
  ) { }

  ngOnInit(): void {
    this.setItemContent();
    console.log(this.item);
  }

  setItemContent() {
    this.itemContentString = this.item.content.slice(0,150);
  }

  editNew(item: New) {
    this._newService.editNew(item);
  }
  
  deleteNew(newToDelete: New) {
    this._sweetAlert.alertAction().then((result) => {
      if (result.isConfirmed) {
        this._sweetAlert.succesMessage('La noticia ha sido borrada.');
        this._newService.deleteNew(newToDelete.id);
        setTimeout(() => {
          location.reload();
        }, 1500)
      } else if (result.isDenied) {
        this._sweetAlert.commonMessage('El permiso no fue eliminado', 'error');
      }
    })

  }
  

}
