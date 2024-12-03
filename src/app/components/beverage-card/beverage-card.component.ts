import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-beverage-card',
  templateUrl: './beverage-card.component.html',
})
export class BeverageCardComponent {
  @Input() name!: string;
  @Input() price!: string;
  @Input() imgSrc!: string;
  @Output() click = new EventEmitter<void>();

  onSelect() {
    this.click.emit();
  }
}
