import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { unwatchFile } from 'fs';

import { switchMap } from 'rxjs/operators';

import { QuestionsService } from '../questions.service';
import { Quiz, Answers, Choice, Question } from '../quiz.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  correctanswers:number;
  quiz: Quiz;
  answers: Answers;
  questions: Question[];
  currentQuestionIndex: number;
  choice : any;
  showResults = false;
  
  constructor(private route: ActivatedRoute, public questionsService: QuestionsService){}

  ngOnInit() {
    console.log("here we go")

    this.questionsService.getQuestions(this.route.snapshot.params.questionId)
      .subscribe(questions => {
        console.log("here we go",questions)

        this.questions = questions;
        this.answers = new Answers();
        this.currentQuestionIndex = 0;
      });
  }

  updateChoice(choice: Choice){
    this.answers.values[this.currentQuestionIndex] = choice;
    this.choice = choice
  }

  nextOrViewResults(){
    console.log(this.currentQuestionIndex)
    if (this.currentQuestionIndex === this.questions.length - 1){
      this.showResults = true;
      return;
    }

    this.currentQuestionIndex++;
  }

  reset(){
    this.quiz = undefined;
    this.questions = undefined;
    this.answers = undefined;
    this.currentQuestionIndex = undefined;
  }

}
