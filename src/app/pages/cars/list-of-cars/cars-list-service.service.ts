import { Injectable } from '@angular/core';
import { AbstractTableData } from '../../shared/abstract.table.data';

@Injectable({
  providedIn: 'root'
})
export class CarsListTableService extends AbstractTableData {

  constructor() { super(); }

  getData() {
    return [
      { sku: "1", marca: 'Peugeot', modelo: 'Peugeot 206 1.4 2005', placa: 'ABC-1234', valorFipe: 11.584, cor: 'Branco' },
      { sku: "2", marca: 'Volkswagen', modelo: 'Gol 1.6 2012', placa: 'BCD-2427', valorFipe: 25.413, cor: 'Vermelho' },
      { sku: "3", marca: 'Fiat', modelo: 'Uno Attractive 1.4 2012', placa: 'ORO-2424', valorFipe: 22.587, cor: 'Preto' },
      { sku: "4", marca: 'Ford', modelo: 'Fusion 2.5L 2015', placa: 'BGH-5648', valorFipe: 60.346, cor: 'Cinza' },
      { sku: "5", marca: 'Chevrolet', modelo: 'Astra Advantage 2.0 2011', placa: 'FUI-0001', valorFipe: 26.458, cor: 'Cinza' },
      { sku: "6", marca: 'Peugeot', modelo: 'Peugeot 208 Active 1.2 2020', placa: 'BCA-5464', valorFipe: 50.987, cor: 'Preto' },
      { sku: "7", marca: 'Volkswagen', modelo: 'Amarok Cabine Dupla 2.0 2018', placa: 'ART-0190', valorFipe: 91.432, cor: 'Branco' },
      { sku: "8", marca: 'Fiat', modelo: 'Strada Adventure 1.8', placa: 'CUA-6969', valorFipe: 67.765, cor: 'Cinza' },
      { sku: "9", marca: 'Ford', modelo: 'Ka 1.0 2019', placa: 'GUJ-2222', valorFipe: 40.934, cor: 'Preto' },
      { sku: "10", marca: 'Chevrolet', modelo: 'Camaro 6.2 V8 Ss 2p', placa: 'AGC-1425', valorFipe: 130.548, cor: 'Amarelo' }
    ];
  }

  getColumns() {
    return {
      sku: {
        title: 'SKU',
        type: 'string',
        filter: true,
        width: '10%',
      },
      marca: {
        title: 'Marca',
        type: 'string',
        filter: true,
        width: '15%',
      },
      modelo: {
        title: 'Modelo',
        type: 'string',
        filter: true,
        width: '20%',
      },
      placa: {
        title: 'Placa',
        type: 'string',
        filter: true,
        width: '10%',
      },
      valorFipe: {
        title: 'Valor-Fipe',
        type: 'number',
        filter: true,
        width: '10%',
      },
      cor: {
        title: 'Cor',
        type: 'string',
        filter: true,
        width: '10%',
      },
    }
  };

}
