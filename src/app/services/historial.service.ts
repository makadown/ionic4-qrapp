import { Injectable } from '@angular/core';
import { ScanData } from '../../models/scan-data.model';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private _historial: any[] = [];

  constructor(private _iab: InAppBrowser) {
   }

   agregar_historial( texto: string) {
      const data = new ScanData(texto);
      this._historial.unshift(data); // meto al inicio del arreglo
      console.log(this._historial);
      this.abrirScan(0);
   }

   cargarHistorial() {
     return this._historial;
   }

   abrirScan(index: number) {
      const scanData: ScanData = this._historial[index];
      console.log(scanData);

      switch( scanData.tipo ) {
        case 'http':
                      this._iab.create(scanData.info, '_system');
                      break;
        default:
            console.error('Tipo no soportado');
      }
   }
}
