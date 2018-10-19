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
    private toast: Toast) { }

  scan() {

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
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
