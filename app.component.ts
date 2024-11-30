import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Make the component standalone
  imports: [RouterOutlet, RouterModule], // Import RouterModule to enable routing directives like routerLink
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Note: It should be `styleUrls` instead of `styleUrl`
})
export class AppComponent {
  title = 'coffee-machine';
  constructor(private router: Router) {}
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
