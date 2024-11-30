import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavouredComponent } from './flavoured.component';

describe('FlavouredComponent', () => {
  let component: FlavouredComponent;
  let fixture: ComponentFixture<FlavouredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlavouredComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlavouredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
