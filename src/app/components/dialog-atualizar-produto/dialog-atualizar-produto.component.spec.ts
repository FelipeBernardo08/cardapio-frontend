import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAtualizarProdutoComponent } from './dialog-atualizar-produto.component';

describe('DialogAtualizarProdutoComponent', () => {
  let component: DialogAtualizarProdutoComponent;
  let fixture: ComponentFixture<DialogAtualizarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAtualizarProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAtualizarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
