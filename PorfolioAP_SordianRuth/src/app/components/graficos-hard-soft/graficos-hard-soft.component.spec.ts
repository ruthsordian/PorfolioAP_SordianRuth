import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosHardSoftComponent } from './graficos-hard-soft.component';

describe('GraficosHardSoftComponent', () => {
  let component: GraficosHardSoftComponent;
  let fixture: ComponentFixture<GraficosHardSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficosHardSoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficosHardSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
