import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BeverageCardComponent } from '../../../../components/beverage-card/beverage-card.component';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrl: './coffees.component.css',
  standalone: true,
  imports: [CommonModule, BeverageCardComponent],
})
export class CoffeesComponent {
  constructor(private router: Router) {}
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  expandedTab: string | null = null;

  toggleExpand(tabId: string): void {
    this.expandedTab = this.expandedTab === tabId ? null : tabId;
  }
  isSelectPageVisible = false;
  selectedBeverage: string = '';
  selectedPrice: string = '';

  openSelectPage(beverage: string, price: string): void {
    this.selectedBeverage = beverage;
    this.selectedPrice = price;
    this.isSelectPageVisible = true;
  }

  closeSelectPage(): void {
    this.isSelectPageVisible = false;
  }

  isPayPageVisible = false;

  openPayPage(beverage: string): void {
    this.selectedBeverage = beverage;
    this.isPayPageVisible = true;
  }

  closePayPage(): void {
    this.isPayPageVisible = false;
  }

  selectedTopping: string = 'none'; // Default topping

  @Input() beverages = [
    { name: 'Capuccino', price: '1.00 €', imgSrc: 'icons/capuccino.svg' },
    { name: 'Espresso', price: '0.80 €', imgSrc: 'icons/espresso.svg' },
    { name: 'Latte', price: '1.20 €', imgSrc: 'icons/latte.svg' },
    { name: 'Mocha', price: '1.50 €', imgSrc: 'icons/mocha.svg' },
    { name: 'Americano', price: '0.90 €', imgSrc: 'icons/americano.svg' },
    { name: 'Latte Macchiato', price: '1.10 €', imgSrc: 'icons/latte_macchiato.svg' },
    { name: 'Macchiato', price: '1.30 €', imgSrc: 'icons/macchiato.svg' },
    { name: 'Lungo', price: '1.10 €', imgSrc: 'icons/lungo.svg' },
  ];

  @Output() beverageSelected = new EventEmitter<any>();

  selectBeverage(beverage: any) {
    this.beverageSelected.emit(beverage);
  }
}
