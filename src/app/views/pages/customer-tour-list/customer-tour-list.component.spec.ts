import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTourListComponent } from './customer-tour-list.component';

describe('CustomerTourListComponent', () => {
  let component: CustomerTourListComponent;
  let fixture: ComponentFixture<CustomerTourListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerTourListComponent]
    });
    fixture = TestBed.createComponent(CustomerTourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
