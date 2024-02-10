import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsContextComponent } from './items-context.component';

describe('ItemsContextComponent', () => {
  let component: ItemsContextComponent;
  let fixture: ComponentFixture<ItemsContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsContextComponent]
    });
    fixture = TestBed.createComponent(ItemsContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
