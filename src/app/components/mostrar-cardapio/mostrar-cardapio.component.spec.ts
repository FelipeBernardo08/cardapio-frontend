import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCardapioComponent } from './mostrar-cardapio.component';

describe('MostrarCardapioComponent', () => {
  let component: MostrarCardapioComponent;
  let fixture: ComponentFixture<MostrarCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarCardapioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
