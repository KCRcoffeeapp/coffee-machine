import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Beverage } from '../../../main';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-beverage-card',
  templateUrl: './beverage-card.component.html',
  imports: [CommonModule],
})
export class BeverageCardComponent {
  constructor(public translationService: TranslationService) {}
  @Input() selectedBeverage: Beverage = {
    name: '',
    name_en: '',
    price: '',
    imgSrc: '',
    size: '',
    sugar: null,
    toppings: [],
  };
  @Output() click = new EventEmitter<void>();

  onSelect() {
    this.click.emit();
  }
}
