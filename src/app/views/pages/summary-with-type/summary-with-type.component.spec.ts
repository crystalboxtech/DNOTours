import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryWithTypeComponent } from './summary-with-type.component';

describe('SummaryWithTypeComponent', () => {
  let component: SummaryWithTypeComponent;
  let fixture: ComponentFixture<SummaryWithTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryWithTypeComponent]
    });
    fixture = TestBed.createComponent(SummaryWithTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
