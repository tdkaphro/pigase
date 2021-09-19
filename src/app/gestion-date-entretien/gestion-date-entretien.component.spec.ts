import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDateEntretienComponent } from './gestion-date-entretien.component';

describe('GestionDateEntretienComponent', () => {
  let component: GestionDateEntretienComponent;
  let fixture: ComponentFixture<GestionDateEntretienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDateEntretienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDateEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
