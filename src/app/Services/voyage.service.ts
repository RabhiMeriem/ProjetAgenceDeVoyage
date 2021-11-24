import { Injectable } from '@angular/core';
import { Voyage } from '../Classes/voyage';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  ListeV:Voyage[]=[
    new Voyage(7,"Tunisie","tunis","","",2500,0,new Date("09/25/2021"),new Date("05/11/2021"),0),
    new Voyage(2,"France","Toulouse","","",2500,25,new Date(2021,11,5),new Date(2021,11,9),0),
    new Voyage(1,"France","Paris","","",2500,15,new Date("09/05/2021"),new Date("05/11/2021"),0),
    new Voyage(4,"","tunisie","","",2500,60,new Date("05/09/2021"),new Date("05/11/2021"),0),
    new Voyage(5,"","tunisie","","",2500,0,new Date("09/19/2021"),new Date("05/11/2021"),0),
    new Voyage(6,"","tunisie","","",2500,50,new Date("09/13/2021"),new Date("05/11/2021"),0)
  ];
  listeVtrie:Voyage[]=this.ListeV;
  constructor() {}
  getVoyages()
  {return this.ListeV;}
  getVoyageById(id:number)
  {return this.ListeV.find(v=>v.id==id);}
  VoyagesByPays(pays:string)
  {
    this.listeVtrie=this.listeVtrie.filter(v=>v.pays==pays);
    return this.listeVtrie;
    }
  VoyagesByDate(Dep:Date,Arr:Date)
  {this.listeVtrie=this.listeVtrie.filter(v=>v.date_dep==Dep &&v.date_arr==Arr);
  return this.listeVtrie;}
}
