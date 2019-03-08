import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDropdownItemComponent } from './product-dropdown-item.component';

describe('ProductDropdownItemComponent', () => {
  let component: ProductDropdownItemComponent;
  let fixture: ComponentFixture<ProductDropdownItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDropdownItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
