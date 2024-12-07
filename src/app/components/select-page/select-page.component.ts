import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Beverage } from '../../../main';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class SelectPageComponent {
  constructor(public translationService: TranslationService) {}
  @Input() selectedBeverage: Beverage = {
    name: '',
    name_en: '',
    price: '',
    imgSrc: '',
    size: '',
    sugar: 0,
    toppings: [],
  };
  @Output() close = new EventEmitter<void>();
  @Output() closePayPage = new EventEmitter<void>();
  @Output() proceedToPay = new EventEmitter<Beverage>();

  toggleTopping(topping: string): void {
    if (!this.selectedBeverage.toppings) {
      this.selectedBeverage.toppings = [];
    }

    const index = this.selectedBeverage.toppings.indexOf(topping);
    if (index === -1) {
      // Topping not in the array, add it
      this.selectedBeverage.toppings.push(topping);
    } else {
      // Topping already in the array, remove it
      this.selectedBeverage.toppings.splice(index, 1);
    }
  }

  closePage() {
    this.close.emit();
  }

  goToPay() {
    this.proceedToPay.emit(this.selectedBeverage);
  }

  closePay() {
    this.closePayPage.emit();
  }
}
