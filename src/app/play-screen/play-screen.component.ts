import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-play-screen',
  templateUrl: './play-screen.component.html',
  styleUrls: ['./play-screen.component.css']
})
export class PlayScreenComponent implements OnInit {
  questions: Question[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
