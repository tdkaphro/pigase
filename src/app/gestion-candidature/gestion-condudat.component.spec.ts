import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCondudatComponent } from './gestion-condudat.component';

describe('GestionCondudatComponent', () => {
  let component: GestionCondudatComponent;
  let fixture: ComponentFixture<GestionCondudatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCondudatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCondudatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
