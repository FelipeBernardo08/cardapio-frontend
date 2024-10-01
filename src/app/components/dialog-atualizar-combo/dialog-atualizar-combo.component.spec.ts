import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAtualizarComboComponent } from './dialog-atualizar-combo.component';

describe('DialogAtualizarComboComponent', () => {
  let component: DialogAtualizarComboComponent;
  let fixture: ComponentFixture<DialogAtualizarComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAtualizarComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAtualizarComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
