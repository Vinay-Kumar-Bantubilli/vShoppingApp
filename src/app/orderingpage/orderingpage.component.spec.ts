import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingpageComponent } from './orderingpage.component';

describe('OrderingpageComponent', () => {
  let component: OrderingpageComponent;
  let fixture: ComponentFixture<OrderingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderingpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
