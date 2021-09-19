import { list_candidats } from './../global';
import { Component, OnInit } from '@angular/core';
import { list_employees, OffreEmploi } from '../global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offre-emploi-candidature',
  templateUrl: './offre-emploi-candidature.component.html',
  styleUrls: ['./offre-emploi-candidature.component.css']
})
export class OffreEmploiCandidatureComponent implements OnInit {
  items = OffreEmploi;
  list_employees = list_employees
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items.forEach(element => {
      list_employees.forEach(element2 => {
        element.list_candidats.forEach(element3 => {
          if(element3.statut){
            element["statut"] = element3.statut
          }
          console.log(element2.id,element3.id)
          if(element2.id == element3.id){
            element["canpostule"]=true;
          }
       
        });
     });
      
    });
  }
  postuler(item, i){
    console.log(i)
    let newitem = JSON.parse(JSON.stringify(this.list_employees[0]))
    newitem["dateCreation"] = new Date()
    newitem["statut"] = "en attente"
    newitem["offreid"] = item.id

    this.items[i].list_candidats.push( newitem )
    console.log( this.list_employees[0],this.items )
    item.candidature++
    
    this.ngOnInit()
  }
  passertestenligne(item){
    this.router.navigate([`quiz/${item.id}`]);


  }

}
