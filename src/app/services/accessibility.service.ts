import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccessibilityService {
  private _accessibility: boolean = false;

  get accessibility(): boolean {
    return this._accessibility;
  }

  // Method to toggle the accessibility state
  toggleAccessibility(): void {
    this._accessibility = !this._accessibility;
    console.log('Accessibility enabled:', this._accessibility);
  }
}
