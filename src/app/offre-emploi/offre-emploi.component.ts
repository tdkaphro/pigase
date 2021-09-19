import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { list_candidats, OffreEmploi } from '../global';

@Component({
  selector: 'app-offre-emploi',
  templateUrl: './offre-emploi.component.html',
  styleUrls: ['./offre-emploi.component.css']
})
export class OffreEmploiComponent implements OnInit {
  items = OffreEmploi;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  consultercandidature(item,i){
    this.router.navigate([`listeCandidature/${item.id}`]);
  }
}
