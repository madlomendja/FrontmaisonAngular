import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainindexComponent } from './mainindex/mainindex.component';
import { MainconstructeurComponent } from './mainconstructeur/mainconstructeur.component';
import { MainmaireComponent } from './mainmaire/mainmaire.component';
import { MainclientComponent } from './mainclient/mainclient.component';
import { MaininscriptionComponent } from './maininscription/maininscription.component';
import { MainconnectionComponent } from './mainconnection/mainconnection.component';
import { FooterComponent } from './footer/footer.component';
import { ListeMaisonComponent } from './liste-maison/liste-maison.component';

@NgModule({
  declarations: [
    AppComponent,
    MainindexComponent,
    MainconstructeurComponent,
    MainmaireComponent,
    MainclientComponent,
    MaininscriptionComponent,
    MainconnectionComponent,
    FooterComponent,
    ListeMaisonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
