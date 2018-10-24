import { Injectable } from '@angular/core';
import { ScanData } from '../../models/scan-data.model';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private _historial: any[] = [];

  constructor() {
   }

   agregar_historial( texto: string) {
      const data = new ScanData(texto);
      this._historial.unshift(data); // meto al inicio del arreglo
      console.log(this._historial);
   }

   cargarHistorial() {
     return this._historial;
   }
}
