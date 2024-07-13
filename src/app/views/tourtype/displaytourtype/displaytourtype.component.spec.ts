import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytourtypeComponent } from './displaytourtype.component';

describe('DisplaytourtypeComponent', () => {
  let component: DisplaytourtypeComponent;
  let fixture: ComponentFixture<DisplaytourtypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaytourtypeComponent]
    });
    fixture = TestBed.createComponent(DisplaytourtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
