import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsApiComponent } from './starwars-api.component';

describe('StarwarsApiComponent', () => {
  let component: StarwarsApiComponent;
  let fixture: ComponentFixture<StarwarsApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarwarsApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarwarsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
