import { Injectable } from '@angular/core';
import { Voyage } from './voyage';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  ListeV:Voyage[]=[
    new Voyage(1,"tunisie","",2500,false,new Date("25/09/2021"),new Date("25/11/2021"),0,[])
  ];
  constructor() {}
  getV()
  {return this.ListeV;}
}
