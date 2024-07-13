import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTourComponent } from './display-tour.component';

describe('DisplayTourComponent', () => {
  let component: DisplayTourComponent;
  let fixture: ComponentFixture<DisplayTourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayTourComponent]
    });
    fixture = TestBed.createComponent(DisplayTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
