import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductfieldComponent } from './productfield.component';

describe('ProductfieldComponent', () => {
  let component: ProductfieldComponent;
  let fixture: ComponentFixture<ProductfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
