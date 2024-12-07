import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BeverageCardComponent } from '../../../../components/beverage-card/beverage-card.component';
import { SelectPageComponent } from '../../../../components/select-page/select-page.component';
import { PayPageComponent } from '../../../../components/pay-page/pay-page.component';
import { BrewingComponent } from '../../../brewing/brewing.component';
import { Beverage } from '../../../../../main';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    BeverageCardComponent,
    SelectPageComponent,
    PayPageComponent,
    BrewingComponent,
  ],
})
export class MoreComponent {
  constructor(private router: Router) {}

  isSelectPageVisible = false;
  isPayPageVisible = false;
  isBrewPageVisible = false;
  selectedBeverage: Beverage = {
    name: '',
    price: '',
    imgSrc: '',
    size: '',
    sugar: null,
  };
  selectedPrice = '';

  openSelectPage(beverage: Beverage): void {
    this.selectedBeverage = { ...beverage };
    this.selectedBeverage.sugar = 0;
    this.isSelectPageVisible = true;
  }

  closeSelectPage(): void {
    this.isSelectPageVisible = false;
  }

  openPayPage(beverage: {
    name: string;
    price: string;
    imgSrc: string;
    size: string;
  }): void {
    this.selectedBeverage = beverage;
    this.isPayPageVisible = true;
  }

  closePayPage(): void {
    this.isPayPageVisible = false;
  }

  openBrewPage(beverage: {
    name: string;
    price: string;
    imgSrc: string;
    size: string;
  }): void {
    this.selectedBeverage = beverage;
    this.isBrewPageVisible = true;
  }

  closeBrewPage(): void {
    this.isBrewPageVisible = false;
    console.log('isBrewPageVisible:', this.isBrewPageVisible);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  @Input() oneClickBeverages = [
    {
      name: 'Vroča čokolada',
      price: '0.80 €',
      imgSrc: 'vroca_cokolada',
      size: 'big',
      sugar: 2,
    },
    {
      name: 'Kakav',
      price: '0.90 €',
      imgSrc: 'kakav',
      size: 'big',
      sugar: 1,
    },
    {
      name: 'Bela vroča čokolada',
      price: '1.20 €',
      imgSrc: 'bela_vroca_cokolada',
      size: 'big',
      sugar: 1,
    },
  ];

  @Input() beverages = [
    {
      name: 'Vroča čokolada',
      price: '0.80 €',
      imgSrc: 'vroca_cokolada',
      size: 'big',
      sugar: null,
    },
    {
      name: 'Kakav',
      price: '0.90 €',
      imgSrc: 'kakav',
      size: 'big',
      sugar: null,
    },
    {
      name: 'Bela vroča čokolada',
      price: '1.20 €',
      imgSrc: 'bela_vroca_cokolada',
      size: 'big',
      sugar: null,
    },
  ];

  @Output() beverageSelected = new EventEmitter<any>();

  selectBeverage(beverage: any) {
    this.beverageSelected.emit(beverage);
  }

  get beverageGroups(): any[][] {
    const groupSize = 3;
    const groups = [];
    for (let i = 0; i < this.beverages.length; i += groupSize) {
      groups.push(this.beverages.slice(i, i + groupSize));
    }
    return groups;
  }
}
