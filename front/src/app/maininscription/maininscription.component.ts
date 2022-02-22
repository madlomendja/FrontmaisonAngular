import { Component, OnInit } from '@angular/core';
import { FormulaireService } from '../services/formulaire.service';

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
  }

  constructor(private service : FormulaireService) { 

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
