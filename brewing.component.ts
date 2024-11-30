import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brewing',
  templateUrl: './brewing.component.html',
  styleUrls: ['./brewing.component.css'],
})
export class BrewingComponent implements OnInit {
  brewingStatus: string = 'Pripravljam napitek...';
  progressWidth: string = '0%';
  isFilled: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Start progress bar animation
      setTimeout(() => {
        this.progressWidth = '100%';
      }, 50);

      // Start cup filling animation after progress bar completes
      setTimeout(() => {
        this.isFilled = true;
      }, 5050);

      // Update status text
      setTimeout(() => {
        this.brewingStatus = 'Napitek je pripravljen!';
      }, 5200);

      // Redirect to home page using Router
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 6000);
    }
  }
}
