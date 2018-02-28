import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotasCursoDetalheComponent } from './rotas-curso-detalhe.component';

describe('RotasCursoDetalheComponent', () => {
  let component: RotasCursoDetalheComponent;
  let fixture: ComponentFixture<RotasCursoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotasCursoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotasCursoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
