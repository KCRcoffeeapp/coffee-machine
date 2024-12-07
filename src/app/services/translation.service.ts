import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<'en' | 'sl'>('sl');
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  // Getter for the current language
  get currentLanguage(): 'en' | 'sl' {
    return this.currentLanguageSubject.value;
  }

  // Method to switch the language
  switchLanguage() {
    const newLanguage = this.currentLanguage === 'en' ? 'sl' : 'en';
    this.currentLanguageSubject.next(newLanguage);
  }

  switchToEnglish() {
    this.currentLanguageSubject.next('en');
  }

  switchToSlovenian() {
    this.currentLanguageSubject.next('sl');
  }

  // Translation function
  translate(text: { en: string; sl: string }): string {
    return this.currentLanguage === 'en' ? text.en : text.sl;
  }
}
