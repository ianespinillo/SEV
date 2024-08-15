import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  title: string= 'Educacion';
  text: string= 'Conjunto de conocimientos, habilidades y actitudes que se enseñan a las personas para que puedan moverse de manera segura y responsable en el entorno vial. Su objetivo principal es prevenir accidentes de tráfico, reducir lesiones y salvar vidas.';
  urlImg: string= './assets/Imgs-decoration/mujer-leyendo.png';
  altImg?: string;  
  constructor() { }

  ngOnInit() {
  }

}
