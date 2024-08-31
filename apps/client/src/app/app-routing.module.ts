import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './SEV/pages/HomePage/HomePage.component';
import { NoticiasComponent } from './SEV/pages/Noticias/Noticias.component';
import { AboutComponent } from './SEV/pages/about/about.component';

const routes: Routes = [
  {
    path: 'SEV',
    component:HomePageComponent,
  },
  {
    path:'noticias',
    component:NoticiasComponent,
  },
  {
    path:'SobreSev',
    component:AboutComponent,
  },
  {
    path: '',
    redirectTo: 'SEV',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'SEV/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
