import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  url = 'http://127.0.0.1:8000/api/utilisateurs'

  constructor(private recup : HttpClient) {

   }

   recuperation(contact:any) : Observable<any>{
     return this.recup.post(this.url, contact)
   }

}
