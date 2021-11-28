import { Injectable } from '@angular/core';
import { Question } from './models/question.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  questions: Question[] = []

  constructor() { }

  AddNewQuestion(frontText: string, backText: string) {
    this.questions.push(new Question(frontText, backText))
    console.log("question added. Question count = " + this.questions.length);
  }
}
