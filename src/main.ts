import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

export interface Beverage {
  name: string;
  price: string;
  imgSrc: string;
  size: string;
  sugar?: number | null;
}
