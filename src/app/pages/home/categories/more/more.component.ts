import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BeverageCardComponent } from '../../../../components/beverage-card/beverage-card.component';
import { SelectPageComponent } from '../../../../components/select-page/select-page.component';
import { PayPageComponent } from '../../../../components/pay-page/pay-page.component';
import { BrewingComponent } from '../../../brewing/brewing.component';
import { Beverage } from '../../../../../main';
import { TranslationService } from '../../../../services/translation.service';

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
  constructor(public translationService: TranslationService) {}

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
    this.selectedBeverage = { ...beverage };
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
      name: 'Vroča čokolada',
      name_en: 'Hot chocolate',
      price: '0.80 €',
      imgSrc: 'vroca_cokolada',
      size: 'big',
      sugar: 2,
      toppings: [],
    },
    {
      name: 'Kakav',
      name_en: 'Cocoa',
      price: '0.90 €',
      imgSrc: 'kakav',
      size: 'big',
      sugar: 1,
      toppings: [],
    },
    {
      name: 'Bela vroča čokolada',
      name_en: 'White hot chocolate',
      price: '1.20 €',
      imgSrc: 'bela_vroca_cokolada',
      size: 'big',
      sugar: 1,
      toppings: [],
    },
  ];

  @Input() beverages = [
    {
      name: 'Vroča čokolada',
      name_en: 'Hot chocolate',
      price: '0.80 €',
      imgSrc: 'vroca_cokolada',
      size: 'big',
      sugar: null,
      toppings: [],
    },
    {
      name: 'Kakav',
      name_en: 'Cocoa',
      price: '0.90 €',
      imgSrc: 'kakav',
      size: 'big',
      sugar: null,
      toppings: [],
    },
    {
      name: 'Bela vroča čokolada',
      name_en: 'White hot chocolate',
      price: '1.20 €',
      imgSrc: 'bela_vroca_cokolada',
      size: 'big',
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
