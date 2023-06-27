import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoComponent } from './encabezado.component';

describe('EncabezadoComponent', () => {
  let component: EncabezadoComponent;
  let fixture: ComponentFixture<EncabezadoComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ EncabezadoComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(EncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creación componente', () => {
    expect(component).toBeTruthy();
  });
});
