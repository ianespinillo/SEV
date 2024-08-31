import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-noticia',
  templateUrl: './card-noticia.component.html',
  styleUrls: ['./card-noticia.component.css']
})
export class CardNoticiaComponent implements OnInit {

  @Input() imgUrl?: string;
  @Input() link?:string;
  @Input() titulo?:string
  constructor() { }

  ngOnInit() {
  }

}
