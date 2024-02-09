import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersContextComponent } from './orders-context.component';

describe('OrdersContextComponent', () => {
  let component: OrdersContextComponent;
  let fixture: ComponentFixture<OrdersContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersContextComponent]
    });
    fixture = TestBed.createComponent(OrdersContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
