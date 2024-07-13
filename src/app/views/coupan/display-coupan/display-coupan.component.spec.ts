import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCoupanComponent } from './display-coupan.component';

describe('DisplayCoupanComponent', () => {
  let component: DisplayCoupanComponent;
  let fixture: ComponentFixture<DisplayCoupanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCoupanComponent]
    });
    fixture = TestBed.createComponent(DisplayCoupanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
