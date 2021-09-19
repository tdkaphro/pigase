import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreEmploiCandidatureComponent } from './offre-emploi-candidature.component';

describe('OffreEmploiCandidatureComponent', () => {
  let component: OffreEmploiCandidatureComponent;
  let fixture: ComponentFixture<OffreEmploiCandidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreEmploiCandidatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreEmploiCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
