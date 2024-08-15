import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-Seguridad',
  templateUrl: './Seguridad.component.html',
  styleUrls: ['./Seguridad.component.css']
})
export class SeguridadComponent implements OnInit {
  title: string= 'Seguridad Vial';
  text: string= 'Una sociedad consciente entiende la responsabilidad compartida en la prevención de accidentes y promueve prácticas seguras entre todos los usuarios viales.';
  urlImg: string= './assets/Imgs-decoration/Semaforo3D.png';
  altImg?: string;  
  constructor() { }

  ngOnInit() {
  }

}
