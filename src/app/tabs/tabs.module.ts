import { MapaPageModule } from './../mapa/mapa.module';
import { GuardadosPageModule } from './../guardados/guardados.module';
import { HomePageModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { TabsPageRoutingModule } from './tabs.router.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    HomePageModule,
    GuardadosPageModule,
    MapaPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
