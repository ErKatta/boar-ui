import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: Date;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: new Date(), name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: new Date(), name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: new Date(), name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: new Date(), name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: new Date(), name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: new Date(), name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: new Date(), name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: new Date(), name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: new Date(), name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: new Date(), name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-training-home-page',
  templateUrl: './training-home-page.component.html',
  styleUrls: ['./training-home-page.component.css'],
})
export class TrainingHomePageComponent {
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'actions',
  ];
  dataSource = ELEMENT_DATA;
}
