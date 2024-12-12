import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BeverageCardComponent } from '../../../../components/beverage-card/beverage-card.component';
import { SelectPageComponent } from '../../../../components/select-page/select-page.component';
import { PayPageComponent } from '../../../../components/pay-page/pay-page.component';
import { BrewingComponent } from '../../../brewing/brewing.component';
import { Beverage } from '../../../../../main';
import { TranslationService } from '../../../../services/translation.service';
import { AccessibilityService } from '../../../../services/accessibility.service';

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
  constructor(
    public translationService: TranslationService,
    public accesibilityService: AccessibilityService
  ) {}

  isSelectPageVisible = false;
  isPayPageVisible = false;
  isBrewPageVisible = false;
  selectedBeverage: Beverage = {
    name: '',
    name_en: '',
    price: '',
    imgSrc: '',
    size: '',
    sugar: null,
    toppings: [],
  };

  openSelectPage(beverage: Beverage): void {
    this.selectedBeverage = {
      ...beverage,
      sugar: 0, // Reset sugar level to 0
      toppings: [], // Reset toppings to an empty array
    };
    this.selectedBeverage.sugar = 0;
    this.isSelectPageVisible = true;
  }

  closeSelectPage(): void {
    this.isSelectPageVisible = false;
  }

  openPayPage(beverage: {
    name: string;
    name_en: string;
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
    name_en: string;
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

  @Input() oneClickBeverages = [
    {
      name: 'Capuccino',
      name_en: 'Capuccino',
      price: '0.90 €',
      imgSrc: 'capuccino',
      size: 'big',
      sugar: 1,
      toppings: [],
    },
    {
      name: 'Espresso',
      name_en: 'Espresso',
      price: '0.80 €',
      imgSrc: 'espresso',
      size: 'small',
      sugar: 0,
      toppings: [],
    },
    {
      name: 'Bela kava',
      name_en: 'Caffe Latte',
      price: '1.20 €',
      imgSrc: 'caffe_latte',
      size: 'big',
      sugar: 2,
      toppings: [],
    },
  ];

  @Input() beverages = [
    {
      name: 'Espresso',
      name_en: 'Espresso',
      price: '0.80 €',
      imgSrc: 'espresso',
      size: 'small',
      sugar: null,
      toppings: [],
    },
    {
      name: 'Dvojni espresso',
      name_en: 'Double Espresso',
      price: '1.40 €',
      imgSrc: 'dvojni_espresso',
      size: 'small',
      sugar: null,
      toppings: [],
    },
    {
      name: 'Cappuccino',
      name_en: 'Capuccino',
      price: '0.90 €',
      imgSrc: 'capuccino',
      size: 'big',
      sugar: null,
      toppings: [],
    },
    {
      name: 'Latte Macchiato',
      name_en: 'Latte Macchiato',
      price: '1.10 €',
      imgSrc: 'latte_macchiato',
      size: 'big',
      sugar: null,
      toppings: [],
    },
    {
      name: 'Bela kava',
      name_en: 'Caffe Latte',
      price: '1.20 €',
      imgSrc: 'caffe_latte',
      size: 'big',
      sugar: null,
      toppings: [],
    },
    {
      name: 'Americano',
      name_en: 'Americano',
      price: '1.20 €',
      imgSrc: 'americano',
      size: 'big',
      sugar: null,
      toppings: [],
    },
    {
      name: 'Mocha',
      name_en: 'Mocha',
      price: '1.50 €',
      imgSrc: 'mocha',
      size: 'big',
      sugar: null,
      toppings: [],
    },
    {
      name: 'Macchiato',
      name_en: 'Macchiato',
      price: '1.30 €',
      imgSrc: 'macchiato',
      size: 'small',
      sugar: null,
      toppings: [],
    },
    {
      name: 'Podaljšana kava',
      name_en: 'Lungo',
      price: '0.90 €',
      imgSrc: 'podaljsana_kava',
      size: 'small',
      sugar: null,
      toppings: [],
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
