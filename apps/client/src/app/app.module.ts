import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { CardComponent } from './SEV/components/card/card.component';
import { HomePageComponent } from './SEV/pages/HomePage/HomePage.component';
import { MaterialModule } from './SEV/material/material/material.module';
import { NavBarComponent } from './SEV/components/navBar/navBar.component';
import { NoticiasComponent } from './SEV/pages/Noticias/Noticias.component';
import { CardNoticiaComponent } from './SEV/components/card-noticia/card-noticia.component';

import { HttpClientModule } from '@angular/common/http';
import { SignalCard } from './SEV/components/signal/signal.component';
import { ManualSeñalesComponent } from './SEV/pages/ManualSeñales/ManualSeñales.component';
import { idCategoryPipe } from './SEV/pipe/categoryId.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomePageComponent,
    NavBarComponent,
    NoticiasComponent,
    CardNoticiaComponent,
    ManualSeñalesComponent,
    SignalCard,
    idCategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule

  ],
  exports: [
    CardComponent,
    SignalCard,
    idCategoryPipe

  ],

  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
