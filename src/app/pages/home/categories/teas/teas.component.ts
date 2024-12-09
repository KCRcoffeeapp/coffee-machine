import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BeverageCardComponent } from '../../../../components/beverage-card/beverage-card.component';
import { SelectPageComponent } from '../../../../components/select-page/select-page.component';
import { PayPageComponent } from '../../../../components/pay-page/pay-page.component';
import { BrewingComponent } from '../../../brewing/brewing.component';
import { Beverage } from '../../../../../main';
import { TranslationService } from '../../../../services/translation.service';
import { AccessibilityService } from '../../../../services/accessibility.service';

@Component({
  selector: 'app-teas',
  templateUrl: './teas.component.html',
  styleUrls: ['./teas.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    BeverageCardComponent,
    SelectPageComponent,
    PayPageComponent,
    BrewingComponent,
  ],
})
export class TeasComponent {
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
    this.selectedBeverage = {
      name: '',
      name_en: '',
      price: '',
      imgSrc: '',
      size: '',
      sugar: 0,
      toppings: [],
    };
  }

  @Input() oneClickBeverages = [
    {
      name: 'Zeleni čaj',
      name_en: 'Green tea',
      price: '0.80 €',
      imgSrc: 'zeleni_caj',
      size: 'small',
      sugar: 3,
      toppings: [],
    },
    {
      name: 'Črni čaj',
      name_en: 'Black tea',
      price: '0.90 €',
      imgSrc: 'crni_caj',
      size: 'small',
      sugar: 4,
      toppings: [],
    },
    {
      name: 'Planinski čaj',
      name_en: 'Mountain tea',
      price: '0.80 €',
      imgSrc: 'planinski_caj',
      size: 'small',
      sugar: 1,
      toppings: [],
    },
  ];

  @Input() beverages = [
    {
      name: 'Zeleni čaj',
      name_en: 'Green tea',
      price: '0.80 €',
      imgSrc: 'zeleni_caj',
      size: 'small',
      sugar: null,
      toppings: [],
    },
    {
      name: 'Kamilični čaj',
      name_en: 'Chamomile tea',
      price: '0.90 €',
      imgSrc: 'kamilicni_caj',
      size: 'small',
      sugar: null,
      toppings: [],
    },
    {
      name: 'Črni čaj',
      name_en: 'Black tea',
      price: '0.90 €',
      imgSrc: 'crni_caj',
      size: 'small',
      sugar: null,
      toppings: [],
    },
    {
      name: 'Planinski čaj',
      name_en: 'Mountain tea',
      price: '0.80 €',
      imgSrc: 'planinski_caj',
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
