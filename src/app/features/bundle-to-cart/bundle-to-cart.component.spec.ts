import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleToCartComponent } from './bundle-to-cart.component';

describe('BundleToCartComponent', () => {
  let component: BundleToCartComponent;
  let fixture: ComponentFixture<BundleToCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BundleToCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundleToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
