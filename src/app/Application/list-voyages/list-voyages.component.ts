import { Component, OnInit } from '@angular/core';
import { Voyage } from 'src/app/Classes/voyage';
import { VoyageService } from 'src/app/Services/voyage.service';

@Component({
  selector: 'app-list-voyages',
  templateUrl: './list-voyages.component.html',
  styleUrls: ['./list-voyages.component.css']
})
export class ListVoyagesComponent implements OnInit {
  ListeVoyages:Voyage[]=[];
  ListeFavoris:Voyage[]=[];
  constructor(private voyageService:VoyageService) { }

  ngOnInit(): void {
    this.ListeVoyages=this.voyageService.getVoyages();
    
  }
ajouter(id:number): void {
  this.voyageService.addFavoris(id);
  this.ListeFavoris=this.voyageService.getFavoris();
}
date(d:Date): void {
  this.ListeVoyages=this.voyageService.getVoyagesByDate(d);
}
}
