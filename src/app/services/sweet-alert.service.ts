import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { New } from '../interface/new.interface';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  succesMessage(title: string) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title,
      showConfirmButton: false,
      timer: 1500
    })
  }
 
  alertAction() {
    return Swal.fire({
      title: 'Esta seguro que quiere eliminar esta noticia?',
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    })
  }

  async editNew(newItem: New) {
    const { value: newContent } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Nueva descripcion',
      inputPlaceholder: 'Coloque la nueva descripcion',
      inputValue: newItem.content,
      showCancelButton: true
    });
    
    if (newContent) {
      this.commonMessage('La descripcion se cambio exitosamente!', 'success');
      newItem.content = newContent;
      return newItem;
    } else {
      return this.commonMessage('No se ingreso ningun valor', 'error');
    }
  }

  commonMessage(msg: string,  icon: SweetAlertIcon = 'info', html = '' ) {
    Swal.fire(msg, html, icon)
  }
  
}
