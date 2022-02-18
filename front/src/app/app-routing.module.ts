import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeMaisonComponent } from './liste-maison/liste-maison.component';
import { MainclientComponent } from './mainclient/mainclient.component';
import { MainconnectionComponent } from './mainconnection/mainconnection.component';
import { MainconstructeurComponent } from './mainconstructeur/mainconstructeur.component';
import { MainindexComponent } from './mainindex/mainindex.component';
import { MaininscriptionComponent } from './maininscription/maininscription.component';
import { MainmaireComponent } from './mainmaire/mainmaire.component';

const routes: Routes = [
  {
    path :'',
    component :MainindexComponent 
  },
  {
    path :'client',
    component :MainclientComponent
  },
  {
    path :'connection',
    component :MainconnectionComponent
  },
  {
    path :'inscription',
    component :MaininscriptionComponent
  },
  {
    path :'constructeur',
    component :MainconstructeurComponent
  },
  {
    path :'maire',
    component :MainmaireComponent
  },
  {
    path :'listeMaison',
    component :ListeMaisonComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
