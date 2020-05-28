import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextComponent implements OnInit {
  @Input() page: boolean;
  constructor() {}

  ngOnInit(): void {}
}
