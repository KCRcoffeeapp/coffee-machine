import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beverage } from '../../../main';

@Component({
  selector: 'app-pay-page',
  templateUrl: './pay-page.component.html',
  styleUrls: ['./pay-page.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class PayPageComponent {
  @Input() selectedBeverage: Beverage = {
    name: '',
    price: '',
    imgSrc: '',
    size: '',
    sugar: null,
  };
  @Output() close = new EventEmitter<void>();
  @Output() brew = new EventEmitter<Beverage>();

  closePage() {
    this.close.emit();
  }

  startBrewing() {
    this.brew.emit(this.selectedBeverage);
    console.log(
      'Starting brewing process for beverage:',
      this.selectedBeverage
    );
  }
}
