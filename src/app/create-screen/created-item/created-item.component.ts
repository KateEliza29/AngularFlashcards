import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-created-item',
  templateUrl: './created-item.component.html',
  styleUrls: ['./created-item.component.css']
})
export class CreatedItemComponent implements OnInit {
  @Input() frontText: string = "";
  @Input() backText: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
