import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersContextComponent } from './customers-context.component';

describe('CustomersContextComponent', () => {
  let component: CustomersContextComponent;
  let fixture: ComponentFixture<CustomersContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersContextComponent]
    });
    fixture = TestBed.createComponent(CustomersContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
