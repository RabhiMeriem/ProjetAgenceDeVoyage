import { Component, OnInit } from '@angular/core';
import { Voyage } from '../voyage';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-liste-voyage',
  templateUrl: './liste-voyage.component.html',
  styleUrls: ['./liste-voyage.component.css']
})
export class ListeVoyageComponent implements OnInit {
  listeV:Voyage[]=[];
  constructor(private voyageService:VoyageService) { }

  ngOnInit(): void {
    this.listeV=this.voyageService.getV();
  }

}
