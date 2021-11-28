import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { Question } from '../../models/question.model';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-card-set',
  templateUrl: './card-set.component.html',
  styleUrls: ['./card-set.component.css']
})
export class CardSetComponent implements OnInit {
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faSmile = faSmile;
  questionCount: number = 0;
  questions: Question[] = [];

  constructor(private dataService: DataService) {  }

  ngOnInit(): void {
    this.questions = this.dataService.questions;
    this.questionCount = 0;
  }

  onLeftArrowClicked() {
    if (this.questionCount > 0) {
      this.questionCount--;
    }
  }

  onRightArrowClicked() {
    if (this.questionCount < this.questions.length) {
      this.questionCount++;
    }
  }

}
