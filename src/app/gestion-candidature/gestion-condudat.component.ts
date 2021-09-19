import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { list_candidats } from '../global';
@Component({
  selector: 'app-gestion-condudat',
  templateUrl: './gestion-condudat.component.html',
  styleUrls: ['./gestion-condudat.component.css'],
})
export class GestionCondudatComponent implements OnInit {
  items = list_candidats;
  form: FormGroup;

  editIndex = -1;
  editItem = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      full_name: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  addCandidat() {
    const candidat = this.form.getRawValue();
    const index = this.items.findIndex((element) => {
      return element.login === candidat.login;
    });
    if (index != -1) {
      alert('login ' + candidat.login + ' deja exist');
    } else {
      this.items.push(candidat);
      this.form.reset();
    }
  }

  deleteCandidat(login) {
    if (
      confirm(
        'do u you really went to delete candidats with login : (' +
          login +
          ') ?'
      )
    ) {
      const index = this.items.findIndex((element) => {
        return element.login === login;
      });
      this.items.splice(index, 1);
    }
  }

  editCandidat(item, index) {
    this.editIndex = index;
    this.editItem = item;
    this.items.splice(index, 1);
    this.form.controls['full_name'].setValue(item.full_name);
    this.form.controls['login'].setValue(item.login);
    this.form.controls['password'].setValue(item.password);
    window.scrollTo(0, 0);
  }

  saveEdit() {
    const candidat = this.form.getRawValue();
    const index = this.items.findIndex((element) => {
      return element.login === candidat.login;
    });
    if (index != -1) {
      alert('login ' + candidat.login + ' deja exist');
    } else {
      this.items.splice(this.editIndex, 0, candidat);
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
}
