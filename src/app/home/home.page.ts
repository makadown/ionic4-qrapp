import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private barcodeScanner: BarcodeScanner,
    private toast: Toast,
    private platform: Platform) { }

  scan() {

    this.barcodeScanner.scan().then(barcodeData => {
     // console.log('Barcode data', barcodeData);
      this.mostrarToast('We got a barcode\n' +
                'Result: ' + barcodeData.text + '\n' +
                'Format: ' + barcodeData.format + '\n' +
                'Cancelled: ' + barcodeData.cancelled);
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
