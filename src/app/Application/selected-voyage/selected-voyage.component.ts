import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voyage } from 'src/app/Classes/voyage';
import { VoyageService } from 'src/app/Services/voyage.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
@Component({
  selector: 'app-selected-voyage',
  templateUrl: './selected-voyage.component.html',
  styleUrls: ['./selected-voyage.component.css']
})
export class SelectedVoyageComponent implements OnInit {
  Voyage: Voyage = new Voyage(0, "", "", [""], "", 0, 0, "", "");
  nvprix: number = 0;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private voyageService: VoyageService) { }
  identifiant: number = 0;
  ngOnInit() {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
    this.voyageService.getVoyageById(this.identifiant).subscribe(data => this.Voyage = data[0]);
  }
  onListe() {
    this.router.navigate(['/listeVoyages']);
  }
  promo() {
    if (this.Voyage.promo != 0) {
      return this.Voyage.prix - (this.Voyage.prix * (this.Voyage.promo / 100));
    }
    else return this.Voyage.prix;
  }
}
