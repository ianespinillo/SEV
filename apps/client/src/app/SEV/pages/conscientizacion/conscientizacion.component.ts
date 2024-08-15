import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conscientizacion',
  templateUrl: './conscientizacion.component.html',
  styleUrls: ['./conscientizacion.component.css']
})
export class ConscientizacionComponent implements OnInit {
  title: string= 'Conscientizacion';
  text: string= 'Una sociedad consciente entiende la responsabilidad compartida en la prevención de accidentes y promueve prácticas seguras entre todos los usuarios viales.';
  urlImg: string= './assets/Imgs-decoration/atencion.png';
  altImg?: string;  
  urlSection?:string= '/cards'
  constructor() { }

  ngOnInit() {
  }

}
