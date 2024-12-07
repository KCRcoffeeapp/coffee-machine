import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Beverage } from '../../../main';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beverage-card',
  templateUrl: './beverage-card.component.html',
  imports: [CommonModule],
})
export class BeverageCardComponent {
  @Input() selectedBeverage: Beverage = {
    name: '',
    price: '',
    imgSrc: '',
    size: '',
    sugar: null,
  };
  @Output() click = new EventEmitter<void>();

  onSelect() {
    this.click.emit();
  }
}
