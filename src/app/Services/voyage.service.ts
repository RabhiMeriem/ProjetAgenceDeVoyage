import { Injectable } from '@angular/core';
import { Voyage } from '../Classes/voyage';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  ListeV:Voyage[]=[
    new Voyage(1,"tunisie","","",2500,0,new Date("09/25/2021"),new Date("05/11/2021"),0,[]),
    new Voyage(2,"tunisie","","",2500,25,new Date("09/11/2021"),new Date("05/11/2021"),0,[]),
    new Voyage(3,"tunisie","","",2500,15,new Date("09/05/2021"),new Date("05/11/2021"),0,[]),
    new Voyage(4,"tunisie","","",2500,60,new Date("05/09/2021"),new Date("05/11/2021"),0,[]),
    new Voyage(5,"tunisie","","",2500,0,new Date("09/19/2021"),new Date("05/11/2021"),0,[]),
    new Voyage(6,"tunisie","","",2500,50,new Date("09/13/2021"),new Date("05/11/2021"),0,[])
  ];
  ListeFavoris:Voyage[]=[];

  constructor() {}
  getVoyages()
  {return this.ListeV;}
  getVoyageById(id:number)
  {return this.ListeV.find(v=>v.id==id);}
  getVoyagesByLib(lib:string)
  {return this.ListeV.filter(v=>v.lib==lib);}
  getVoyagesByDate(Dep:Date)
  {return this.ListeV.filter(v=>v.date_dep==Dep);}
  VoyageExiste(id:number)
  {
    if(this.ListeFavoris.find(v=>v.id==id)==null)
    {return true;}
    else return false;
  }
  addFavoris(id:number)
  {
    if(this.VoyageExiste(id)==false)
    {return false;}
    else
    {
      var o1=Object.assign({},this.getVoyageById(id));
      this.ListeFavoris.push(o1);
      return true;
    }
  }
  getFavoris()
  {return this.ListeFavoris;}
}
