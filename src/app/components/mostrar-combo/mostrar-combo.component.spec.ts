import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarComboComponent } from './mostrar-combo.component';

describe('MostrarComboComponent', () => {
  let component: MostrarComboComponent;
  let fixture: ComponentFixture<MostrarComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
