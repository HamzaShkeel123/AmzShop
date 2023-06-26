import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateLayout2Component } from './private-layout2.component';

describe('PrivateLayout2Component', () => {
  let component: PrivateLayout2Component;
  let fixture: ComponentFixture<PrivateLayout2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateLayout2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
