import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffreEmploi } from '../global';

@Component({
  selector: 'app-liste-candidature',
  templateUrl: './liste-candidature.component.html',
  styleUrls: ['./liste-candidature.component.css']
})
export class ListeCandidatureComponent implements OnInit {
  items = OffreEmploi;
  candidature = []
  constructor(private router: ActivatedRoute ) { }

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    console.log(this.items)
    this.items.forEach(element => {
      console.log(id)

      element.list_candidats.forEach(element2 => {
        console.log(element2)

        if(element2.offreid == id){
          this.candidature.push(element2)
        }
        
      });
    });

  }
  rejeter(item){
    item.statut="rejeter";
  }
    valider(item){
  item.statut="valider";
}

}
