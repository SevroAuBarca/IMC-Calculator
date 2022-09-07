import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoComponenteComponent } from './resultado-componente.component';

describe('ResultadoComponenteComponent', () => {
  let component: ResultadoComponenteComponent;
  let fixture: ComponentFixture<ResultadoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
