import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { TranslationService } from './services/translation.service';
import { CommonModule } from '@angular/common';
import { AccessibilityService } from './services/accessibility.service';

@Component({
  selector: 'app-root',
  standalone: true, // Make the component standalone
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    public translationService: TranslationService,
    public accesibilityService: AccessibilityService
  ) {}
  title = 'coffee-machine';
}
