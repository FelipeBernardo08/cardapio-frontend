import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCombosComponent } from './cadastrar-combos.component';

describe('CadastrarCombosComponent', () => {
  let component: CadastrarCombosComponent;
  let fixture: ComponentFixture<CadastrarCombosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCombosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCombosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
