import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAtualizarCategoriaComponent } from './dialog-atualizar-categoria.component';

describe('DialogAtualizarCategoriaComponent', () => {
  let component: DialogAtualizarCategoriaComponent;
  let fixture: ComponentFixture<DialogAtualizarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAtualizarCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAtualizarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
