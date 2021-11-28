import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Question } from './models/question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  page: string = "create";
  questions: Question[] = [];

  constructor(private dataService: DataService) {  }

  ngOnInit() {
    this.questions = this.dataService.questions;
  }

  onPageClicked(pageName: string) {
    this.page = pageName; 
  }



}
