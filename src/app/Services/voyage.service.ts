import { Injectable } from '@angular/core';
import { Voyage } from '../Classes/voyage';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  ListeV:Voyage[]=[
    new Voyage(7,"Tunisie","tunis",["../../assets/tunis.jpg","../../assets/tunis2.jpg","../../assets/tunis3.jpg","../../assets/tunis4.jpg"],"",2500,0,new Date("09/25/2021"),new Date("05/11/2021"),0),
    new Voyage(2,"France","Toulouse",["../../assets/toulouse.jpg"],"",2500,25,new Date(2021,11,5),new Date(2021,11,9),0),
    new Voyage(1,"France","Paris",["../../assets/paris.jpg"],"",2500,15,new Date("09/05/2021"),new Date("05/11/2021"),0),
    new Voyage(4,"Allemagne","Berlin",["../../assets/berlin.jpg"],"",2500,60,new Date("05/09/2021"),new Date("05/11/2021"),0),
    new Voyage(5,"Espagne","Madrid",["../../assets/madrid.jpg"],"",2500,0,new Date("09/19/2021"),new Date("05/11/2021"),0),
    new Voyage(6,"America","New York",["../../assets/newYork.jpg"],"",2500,50,new Date("09/13/2021"),new Date("05/11/2021"),0)
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
