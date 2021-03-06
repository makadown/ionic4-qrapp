import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { HistorialService } from '../../services/historial.service';
import { BarcodeData } from '../../../models/barcode-data.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private barcodeScanner: BarcodeScanner,
    private toast: Toast,
    private platform: Platform,
    private historialService: HistorialService) { }

  scan() {

    if (!this.platform.is('cordova')) {
      this.historialService.agregar_historial('http://www.google.com');
      return;
    }

    this.barcodeScanner.scan().then( (barcodeData: BarcodeScanResult) => {
     // console.log('Barcode data', barcodeData);
      this.mostrarToast('We got a barcode\n' +
                'Result: ' + barcodeData.text + '\n' +
                'Format: ' + barcodeData.format + '\n' +
                'Cancelled: ' + barcodeData.cancelled);
      if (  !barcodeData.cancelled  /*&& barcodeData.text != null*/ ) {
        this.historialService.agregar_historial(barcodeData.text);
      }
     }).catch(err => {
         this.mostrarToast( 'Error ' +  err);
     });
  }

  mostrarToast(mensaje: string) {
    this.toast.show(mensaje, '3000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }
}
