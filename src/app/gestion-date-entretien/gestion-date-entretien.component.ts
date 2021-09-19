import { list_employees, list_entretiens, OffreEmploi } from './../global';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { list_candidats } from '../global';

@Component({
  selector: 'app-gestion-date-entretien',
  templateUrl: './gestion-date-entretien.component.html',
  styleUrls: ['./gestion-date-entretien.component.css'],
})
export class GestionDateEntretienComponent implements OnInit {
  candidats = list_candidats;
  employees = list_employees;
  items = list_entretiens;
  offre = OffreEmploi;

  form: FormGroup;
  candidatures=[]
  editIndex = -1;
  editItem = null;

  minDate;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.form = this.fb.group({
      employee: [null, Validators.required],
      candidat: [null, Validators.required],
      date: [null, Validators.required],
    });

    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);
  }

  addEntretien() {
    const item = this.form.getRawValue();
    const index = this.items.findIndex((element) => {
      return (
        (JSON.stringify(element.employee) === JSON.stringify(item.employee) ||
          JSON.stringify(element.candidat) === JSON.stringify(item.candidat)) &&
        JSON.stringify(element.date) === JSON.stringify(item.date)
      );
    });
    if (index != -1) {
      alert('employee or candidats not available in this date ');
    } else {
      console.log(item,"hmed")
      this.items.push(item);
      this.form.reset();
    }
  }

  deleteEntretien(entretien) {
    if (confirm('do u you really went to delete this entretirn  ?')) {
      const index = this.items.findIndex((element) => {
        console.log(entretien,element);

        return (

          JSON.stringify(element.employee) ===
            JSON.stringify(entretien.employee) &&
          JSON.stringify(element.candidat) ===
            JSON.stringify(entretien.candidat) &&
          JSON.stringify(element.date) === JSON.stringify(entretien.date)
        );
      });
      this.items.splice(index, 1);
    }
  }

  editEntretien(item, index) {
    this.editIndex = index;
    this.editItem = item;
    this.items.splice(index, 1);
    this.form.controls['employee'].setValue(item.employee);
    this.form.controls['candidat'].setValue(item.candidat);
    this.form.controls['date'].setValue(item.date);
    window.scrollTo(0, 0);
  }

  saveEdit() {
    const entretien = this.form.getRawValue();
    const index = this.items.findIndex((element) => {
      return (
        (JSON.stringify(element.employee) ===
          JSON.stringify(entretien.employee) ||
          JSON.stringify(element.candidat) ===
            JSON.stringify(entretien.candidat)) &&
        JSON.stringify(element.date) === JSON.stringify(entretien.date)
      );
    });
    if (index != -1) {
      alert('employee or candidats not available in this date');
    } else {
      this.items.splice(this.editIndex, 0, entretien);
      this.form.reset();
      this.resetEditing();
    }
  }

  cancelEdit() {
    this.items.splice(this.editIndex, 0, this.editItem);
    this.form.reset();
    this.resetEditing();
  }

  resetEditing() {
    this.editIndex = -1;
    this.editItem = null;
  }
  someMethod (item){
    this.candidatures=[]
    console.log(item.id)
   this.offre.forEach(element => {
    element.list_candidats.forEach(element2 => {
      console.log(element2,"ahaa")
      if(item.id == element2.id){
        this.candidatures.push(element)
      }
    });
   });
   console.log(this.candidatures)
 }
}
