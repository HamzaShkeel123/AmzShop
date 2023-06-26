import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleViewComponent } from './bundle-view.component';

describe('BundleViewComponent', () => {
  let component: BundleViewComponent;
  let fixture: ComponentFixture<BundleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BundleViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
