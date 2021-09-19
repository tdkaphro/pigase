import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GestionCondudatComponent } from './gestion-candidature/gestion-condudat.component';
import { HomeComponent } from './home/home.component';
import { GestionDateEntretienComponent } from './gestion-date-entretien/gestion-date-entretien.component';
import { GestionQuizzComponent } from './gestion-quizz/gestion-quizz.component';
import { QuizComponent } from './quiz/quiz.component';
import { OffreEmploiComponent } from './offre-emploi/offre-emploi.component';
import { OffreEmploiCandidatureComponent } from './offre-emploi-candidature/offre-emploi-candidature.component';
import { ListeCandidatureComponent } from './liste-candidature/liste-candidature.component';
import { QuestionsComponent } from './questions/questions.component';
const routes:Routes=[
{
  path:"",
  component:HomeComponent,

},{

path:"gestionCondidat",
component:OffreEmploiComponent

},
{

  path:"offres",
  component:OffreEmploiCandidatureComponent
  
  }
,{
path:"gestionDate",
component:GestionDateEntretienComponent

},{
path:"gestionQuizz",
component:GestionQuizzComponent

},
{
  path:"listeCandidature/:id",
  component:ListeCandidatureComponent
  }
,{
path:"quizz/:questionId",
component:QuestionsComponent
}

]


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule { }
