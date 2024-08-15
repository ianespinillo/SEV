import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SevRoutes } from './sev.routing';
import { LayoutComponent } from './pages/layout/layout.component';
import { SeguridadComponent } from './pages/Seguridad/Seguridad.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ConscientizacionComponent } from './pages/conscientizacion/conscientizacion.component';
import { SharedModule } from "./shared/shared.module";
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { EnviarPreguntaComponent } from './pages/enviarPregunta/enviarPregunta.component';
import { RespuestasComponent } from './pages/respuestas/respuestas.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { AboutUsComponent } from './pages/aboutUs/aboutUs.component';

@NgModule({
  declarations: [LayoutComponent,SeguridadComponent,EducacionComponent,ConscientizacionComponent,EnviarPreguntaComponent,RespuestasComponent,NoticiasComponent,AboutUsComponent],
  imports: [
    SevRoutes,
    SharedModule,
    RouterModule,
    MaterialModule
],
  providers: [],
})
export class SevModule { }
