import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input() title?: string;
  @Input() text?: string;
  @Input() urlImg?: string;
  @Input() altImg?: string;

  ngOnInit() {
  }

}
