import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuizQuestion } from '../model/QuizQuestion';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  
})
export class QuizComponent implements OnInit {
  @Input() answer: string;
  @Input() formGroup: FormGroup;
  @Output() question: QuizQuestion;
  totalQuestions: number;
  completionTime: number;
  correctAnswersCount = 0;

  questionID = 0;
  currentQuestion = 0;
  questionIndex: number;
  correctAnswer: boolean;
  hasAnswer: boolean;
  disabled: boolean;
  quizIsOver: boolean;
  progressValue: number;
  timeLeft: number;
  timePerQuestion = 20;
  interval: any;
  elapsedTime: number;
  elapsedTimes = [];
  blueBorder = '2px solid #007aff';
  constructor() { }

  ngOnInit(): void {
  }

  allQuestions: QuizQuestion[] = [
    {
      questionId: 1,
      questionText: 'What is the objective of dependency injection?',
      options: [
        { optionValue: '1', optionText: 'Pass the service to the client.' },
        { optionValue: '2', optionText: 'Allow the client to find service.' },
        { optionValue: '3', optionText: 'Allow the client to build service.' },
        { optionValue: '4', optionText: 'Give the client part service.' }
      ],
      answer: '1',
      explanation: 'a service gets passed to the client during DI',
      selectedOption: ''
    },
    {
      questionId: 2,
      questionText: 'Which of the following benefit from dependency injection?',
      options: [
        { optionValue: '1', optionText: 'Programming' },
        { optionValue: '2', optionText: 'Testability' },
        { optionValue: '3', optionText: 'Software design' },
        { optionValue: '4', optionText: 'All of the above.' },
      ],
      answer: '4',
      explanation: 'DI simplifies both programming and testing as well as being a popular design pattern',
      selectedOption: ''
    },
    {
      questionId: 3,
      questionText: 'Which of the following is the first step in setting up dependency injection?',
      options: [
        { optionValue: '1', optionText: 'Require in the component.' },
        { optionValue: '2', optionText: 'Provide in the module.' },
        { optionValue: '3', optionText: 'Mark dependency as @Injectable().' },
        { optionValue: '4', optionText: 'Declare an object.' }
      ],
      answer: '3',
      explanation: 'the first step is marking the class as @Injectable()',
      selectedOption: ''
    },
    {
      questionId: 4,
      questionText: 'In which of the following does dependency injection occur?',
      options: [
        { optionValue: '1', optionText: '@Injectable()' },
        { optionValue: '2', optionText: 'constructor' },
        { optionValue: '3', optionText: 'function' },
        { optionValue: '4', optionText: 'NgModule' },
      ],
      answer: '2',
      explanation: 'object instantiations are taken care of by the constructor in Angular',
      selectedOption: ''
    }
  ];

}
