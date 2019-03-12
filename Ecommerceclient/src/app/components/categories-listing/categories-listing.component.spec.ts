import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesListingComponent } from './categories-listing.component';

describe('CategoriesListingComponent', () => {
  let component: CategoriesListingComponent;
  let fixture: ComponentFixture<CategoriesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
