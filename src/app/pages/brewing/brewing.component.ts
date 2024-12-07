import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Beverage } from '../../../main';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brewing',
  templateUrl: './brewing.component.html',
  styleUrls: ['./brewing.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class BrewingComponent implements OnInit {
  @Input() selectedBeverage: Beverage = {
    name: '',
    price: '',
    imgSrc: '',
    size: '',
    sugar: null,
  };
  brewingStatus: string = '';
  progressWidth: string = '0%';
  cancelStatus: boolean = true;
  @Output() close = new EventEmitter<void>();

  get coffeeFillClipPath(): string {
    // Calculate the percentage of the cup being filled
    const fillPercentage = parseInt(this.progressWidth, 10) || 0;
    return `polygon(0% 100%, 100% 100%, 100% ${100 - fillPercentage}%, 0% ${
      100 - fillPercentage
    }%)`;
  }

  cancelBrewing(): void {
    this.close.emit();
  }

  ngOnInit(): void {
    console.log('BrewingComponent initialized with:', this.cancelStatus);
    this.brewingStatus = 'Pripravljam ' + this.selectedBeverage.name + '...';
    setTimeout(() => {
      this.cancelStatus = false;
      console.log('BrewingComponent initialized with:', this.cancelStatus);
      // Start progress bar animation
      setTimeout(() => {
        this.progressWidth = '100%';
      }, 50);

      // Update status text
      setTimeout(() => {
        this.brewingStatus = this.selectedBeverage.name + ' je pripravljen/a!';
      }, 5200);

      // Redirect to home page using Router
      setTimeout(() => {
        this.close.emit();
      }, 6000);
    }, 2000);
  }
}
