import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-scroller',
  templateUrl: './image-scroller.component.html',
  styleUrls: ['./image-scroller.component.scss']
})
export class ImageScrollerComponent implements OnInit {

  @Input() public images: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
