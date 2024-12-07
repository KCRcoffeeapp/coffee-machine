import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { TranslationService } from './services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // Make the component standalone
  imports: [RouterOutlet, RouterModule, CommonModule], // Import RouterModule to enable routing directives like routerLink
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Note: It should be `styleUrls` instead of `styleUrl`
})
export class AppComponent {
  constructor(public translationService: TranslationService) {}
  title = 'coffee-machine';
}
