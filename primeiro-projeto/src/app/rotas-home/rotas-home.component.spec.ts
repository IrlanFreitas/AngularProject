import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotasHomeComponent } from './rotas-home.component';

describe('RotasHomeComponent', () => {
  let component: RotasHomeComponent;
  let fixture: ComponentFixture<RotasHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotasHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
