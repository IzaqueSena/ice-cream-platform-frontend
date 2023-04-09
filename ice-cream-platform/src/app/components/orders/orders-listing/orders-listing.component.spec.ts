import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersListingComponent } from './orders-listing.component';

describe('OrdersListingComponent', () => {
  let component: OrdersListingComponent;
  let fixture: ComponentFixture<OrdersListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
