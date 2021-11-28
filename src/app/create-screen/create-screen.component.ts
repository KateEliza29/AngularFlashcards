import { Component, OnInit } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-create-screen',
  templateUrl: './create-screen.component.html',
  styleUrls: ['./create-screen.component.css']
})
export class CreateScreenComponent implements OnInit {
  faSave = faSave;
  questions: Question[] = [];
  frontText: string = "";
  backText: string = "";
  
  constructor(private dataService: DataService) { }

  onClicked() {
    console.log(this.frontText + this.backText);
    this.dataService.AddNewQuestion(this.frontText, this.backText);
  }

  ngOnInit(): void {
    this.questions = this.dataService.questions;
  }

}
