import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProDetailsViewComponent } from './pro-details-view.component';

describe('ProDetailsViewComponent', () => {
  let component: ProDetailsViewComponent;
  let fixture: ComponentFixture<ProDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
