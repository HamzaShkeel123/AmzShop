import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductByCategoryComponent } from './user-product-by-category.component';

describe('UserProductByCategoryComponent', () => {
  let component: UserProductByCategoryComponent;
  let fixture: ComponentFixture<UserProductByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProductByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProductByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
