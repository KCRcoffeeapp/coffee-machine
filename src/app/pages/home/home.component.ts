import { Component } from '@angular/core';
import { CoffeesComponent } from './categories/coffees/coffees.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TeasComponent } from './categories/teas/teas.component';
import { FlavouredComponent } from './categories/flavoured/flavoured.component';
import { MoreComponent } from './categories/more/more.component';

@Component({
  selector: 'app-home',
  imports: [
    CoffeesComponent,
    CommonModule,
    TeasComponent,
    FlavouredComponent,
    MoreComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  currentView: string = 'coffees'; // Default view
}
