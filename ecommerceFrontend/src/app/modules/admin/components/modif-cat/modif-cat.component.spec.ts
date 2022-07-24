import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifCatComponent } from './modif-cat.component';

describe('ModifCatComponent', () => {
  let component: ModifCatComponent;
  let fixture: ComponentFixture<ModifCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
