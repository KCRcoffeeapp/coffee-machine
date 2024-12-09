import { Component } from '@angular/core';
import { CoffeesComponent } from './categories/coffees/coffees.component';
import { CommonModule } from '@angular/common';
import { TeasComponent } from './categories/teas/teas.component';
import { MoreComponent } from './categories/more/more.component';
import { TranslationService } from '../../services/translation.service';
import { AccessibilityService } from '../../services/accessibility.service';

@Component({
  selector: 'app-home',
  imports: [CoffeesComponent, CommonModule, TeasComponent, MoreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    public translationService: TranslationService,
    public accesibilityService: AccessibilityService
  ) {}
  currentView: string = 'coffees'; // Default view
}
