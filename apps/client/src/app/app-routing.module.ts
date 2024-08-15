import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'SEV', loadChildren: () => import('./SEV/sev.module').then(m => m.SevModule) },
  {
    path: '',
    redirectTo: 'SEV',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
