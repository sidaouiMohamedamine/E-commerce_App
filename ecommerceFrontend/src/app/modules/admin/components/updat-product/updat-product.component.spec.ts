import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatProductComponent } from './updat-product.component';

describe('UpdatProductComponent', () => {
  let component: UpdatProductComponent;
  let fixture: ComponentFixture<UpdatProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
