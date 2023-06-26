import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPromotionViewComponent } from './product-promotion-view.component';

describe('ProductPromotionViewComponent', () => {
  let component: ProductPromotionViewComponent;
  let fixture: ComponentFixture<ProductPromotionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPromotionViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPromotionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
