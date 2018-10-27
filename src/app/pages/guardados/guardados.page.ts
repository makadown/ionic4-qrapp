import { HistorialService } from './../../services/historial.service';
import { Component, OnInit } from '@angular/core';
import { ScanData } from '../../../models/scan-data.model';

@Component({
  selector: 'app-guardados',
  templateUrl: './guardados.page.html',
  styleUrls: ['./guardados.page.scss'],
})
export class GuardadosPage implements OnInit {
  historial: ScanData[] = [];
  constructor(private _historialService: HistorialService) {
      this.historial = this._historialService.cargarHistorial();
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log('Cargando ionViewDidLoad');
    // this.historial = this._historialService.cargarHistorial();
  }

  abrir_scan( index: number) {
    this._historialService.abrirScan(index);
  }

}
