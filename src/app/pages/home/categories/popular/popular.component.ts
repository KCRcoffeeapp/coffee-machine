import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class PopularComponent {
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
}
