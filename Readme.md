# QRAPP

Demo experimental en ionic 4 de app de curso de instructor Fernando Herrera.

Recursos de auxilio:
https://www.qrcode.es/es/generador-qr-code/

## Creación de proyecto

> ionic start qrapp blank

![alt text](qrapp01.png "Imagen 1")

Elegí que instalara ionic 4, cordova y omito ionic pro sdk.

![alt text](qrapp02.png "Imagen 2")


### Primeros elementos

> ionic g page guardados

> ionic g page mapa

> ionic g page tabs


El proyecto en ionic 4 ahora tiene la estructura siguiente:

![alt text](qrapp03.png "Estructura de proyecto")


Iconos de ionic pueden ser consultados aquí:

https://ionicframework.com/docs/ionicons/


## Cambios de version 4

La forma de enrutamiento en los tabs es extremadamente diferente. Aquí una guia:

https://medium.com/@sandipmann/routing-in-ionic-4-84cb052cbe51

Antes para generar providers se invocaba:

> ionic generate provider historial

ahora es:

> ionic generate service miServicio


### Instalacion de plugins nativos (beta ionic 4): 

BarCode Scanner

> ionic cordova plugin add phonegap-plugin-barcodescanner

> npm install --save @ionic-native/barcode-scanner@beta

Toast

> ionic cordova plugin add cordova-plugin-x-toast

> npm install --save @ionic-native/toast@beta