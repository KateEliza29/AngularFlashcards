import { Component, OnInit, Input } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  faHome = faHome;
  faUserCircle = faUserCircle;
  faChartPie = faChartPie;
  faCog = faCog;
  faPlusCircle = faPlusCircle;
  faQuestionCircle = faQuestionCircle;
  frontShowing: boolean = true;
  @Input() front: string = "";
  @Input() back: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onCardClicked() {
    if (this.frontShowing) {
      this.frontShowing = false;
      console.log(this.frontShowing);
    }
    else {
      this.frontShowing = true;
      console.log(this.frontShowing);
    }
  }

}
