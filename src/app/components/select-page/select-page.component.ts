import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Beverage } from '../../../main';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class SelectPageComponent {
  @Input() selectedBeverage: Beverage = {
    name: '',
    price: '',
    imgSrc: '',
    size: '',
    sugar: 0,
  };
  @Output() close = new EventEmitter<void>();
  @Output() closePayPage = new EventEmitter<void>();
  @Output() proceedToPay = new EventEmitter<Beverage>();

  selectedTopping: string = 'none';

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
