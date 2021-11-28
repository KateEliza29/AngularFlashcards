import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() pageClickedEvent = new EventEmitter<string>();

  constructor() { }

  pageClicked(pageName: string) {
    this.pageClickedEvent.emit(pageName);
    console.log(pageName);
  }

  ngOnInit(): void {

  }

}
