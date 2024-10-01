import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCombosComponent } from './listar-combos.component';

describe('ListarCombosComponent', () => {
  let component: ListarCombosComponent;
  let fixture: ComponentFixture<ListarCombosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCombosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCombosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
