import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceOrderContextComponent } from './place-order-context.component';

describe('PlaceOrderContextComponent', () => {
  let component: PlaceOrderContextComponent;
  let fixture: ComponentFixture<PlaceOrderContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceOrderContextComponent]
    });
    fixture = TestBed.createComponent(PlaceOrderContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
