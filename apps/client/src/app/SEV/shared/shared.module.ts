import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { MaterialModule } from '../material/material.module';
import { NotFoundComponent } from './pages/404/404.component';

@NgModule({
  declarations: [NavbarComponent,SectionComponent,NotFoundComponent],

  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [NavbarComponent,SectionComponent]
})
export class SharedModule { }
