import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotasLoginComponent } from './rotas-login.component';

describe('RotasLoginComponent', () => {
  let component: RotasLoginComponent;
  let fixture: ComponentFixture<RotasLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotasLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotasLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
