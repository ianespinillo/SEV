import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { SeguridadComponent } from './pages/Seguridad/Seguridad.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ConscientizacionComponent } from './pages/conscientizacion/conscientizacion.component';
import { EnviarPreguntaComponent } from './pages/enviarPregunta/enviarPregunta.component';
import { RespuestasComponent } from './pages/respuestas/respuestas.component';
import { AboutUsComponent } from './pages/aboutUs/aboutUs.component';
import { NotFoundComponent } from './shared/pages/404/404.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'seguridad', component:SeguridadComponent  },
      { path: 'educacion', component: EducacionComponent },
      { path: 'conscientizacion', component:  ConscientizacionComponent},
      { path: 'enviarPregunta', component:  EnviarPreguntaComponent},
      { path: 'respuestas', component:  RespuestasComponent},
      { path: 'aboutUs', component:  AboutUsComponent},
      { path: 'noticias', component:  NoticiasComponent},
      { path: '', redirectTo: 'seguridad', pathMatch: 'full' },
      { path: '404', component: NotFoundComponent}

    ]
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

export const SevRoutes = RouterModule.forChild(routes);


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
