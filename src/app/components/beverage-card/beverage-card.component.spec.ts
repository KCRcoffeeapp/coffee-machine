import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageCardComponent } from './beverage-card.component';

describe('BeverageCardComponent', () => {
  let component: BeverageCardComponent;
  let fixture: ComponentFixture<BeverageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeverageCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeverageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
