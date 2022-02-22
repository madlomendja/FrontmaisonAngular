import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../services/inscription.service';

@Component({
  selector: 'app-maininscription',
  templateUrl: './maininscription.component.html',
  styleUrls: ['./maininscription.component.css']
})
export class MaininscriptionComponent implements OnInit {

  formulaire = {
    nom : '',
    prenom : '',
    email : '',
    password : '',
    status : '',
  }

  constructor(private service : InscriptionService) { 

  }

  ngOnInit(): void {
  }

  onsubmit(){
    console.log('soumission', this.formulaire)
    this.service.recuperation(this.formulaire).subscribe(fleche => {
      console.log(fleche)
    })
  }

}
