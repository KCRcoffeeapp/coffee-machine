import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BeverageCardComponent } from '../../../../components/beverage-card/beverage-card.component';
import { SelectPageComponent } from '../../../../components/select-page/select-page.component';
import { PayPageComponent } from '../../../../components/pay-page/pay-page.component';
import { BrewingComponent } from '../../../brewing/brewing.component';
import { Beverage } from '../../../../../main';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    BeverageCardComponent,
    SelectPageComponent,
    PayPageComponent,
    BrewingComponent,
  ],
})
export class CoffeesComponent {
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
      name: 'Capuccino',
      price: '0.80 €',
      imgSrc: 'capuccino',
      size: 'big',
      sugar: 1,
    },
    {
      name: 'Espresso',
      price: '0.90 €',
      imgSrc: 'espresso',
      size: 'small',
      sugar: 0,
    },
    {
      name: 'Caffe Latte',
      price: '1.20 €',
      imgSrc: 'caffe_latte',
      size: 'big',
      sugar: 2,
    },
  ];

  @Input() beverages = [
    {
      name: 'Espresso',
      price: '0.80 €',
      imgSrc: 'espresso',
      size: 'small',
      sugar: null,
    },
    {
      name: 'Dvojni espresso',
      price: '1.40 €',
      imgSrc: 'dvojni_espresso',
      size: 'small',
      sugar: null,
    },
    {
      name: 'Cappuccino',
      price: '1.00 €',
      imgSrc: 'capuccino',
      size: 'big',
      sugar: null,
    },
    {
      name: 'Latte Macchiato',
      price: '1.10 €',
      imgSrc: 'latte_macchiato',
      size: 'big',
      sugar: null,
    },
    {
      name: 'Caffe Latte',
      price: '1.20 €',
      imgSrc: 'caffe_latte',
      size: 'big',
      sugar: null,
    },
    {
      name: 'Americano',
      price: '0.90 €',
      imgSrc: 'americano',
      size: 'big',
      sugar: null,
    },
    {
      name: 'Mocha',
      price: '1.50 €',
      imgSrc: 'mocha',
      size: 'big',
      sugar: null,
    },
    {
      name: 'Macchiato',
      price: '1.30 €',
      imgSrc: 'macchiato',
      size: 'small',
      sugar: null,
    },
    {
      name: 'Podaljšana kava',
      price: '1.10 €',
      imgSrc: 'podaljsana_kava',
      size: 'small',
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
