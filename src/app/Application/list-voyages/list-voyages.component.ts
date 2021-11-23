
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Voyage } from 'src/app/Classes/voyage';
import { VoyageService } from 'src/app/Services/voyage.service';

@Component({
  selector: 'app-list-voyages',
  templateUrl: './list-voyages.component.html',
  styleUrls: ['./list-voyages.component.css']
})
export class ListVoyagesComponent implements OnInit {
  ListeVoyages: Voyage[] = [];
  ListeFavoris: Voyage[] = [];
  voyageForm: FormGroup = new FormGroup({});
  constructor(private voyageService: VoyageService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ListeVoyages = this.voyageService.getVoyages();
    this.voyageForm = this.fb.group({
      //datedep:[formatDate("",'dd-MM-YYYY', 'en')],
      //datedarr:[formatDate("",'dd-MM-YYYY', 'en')],
      lib: [''],
      //datec: [false],
      paysc: [false]
    });
  }
  ajouter(id: number): void {
    this.voyageService.addFavoris(id);
    this.ListeFavoris = this.voyageService.getFavoris();
  }
  paysc(): boolean {
    return this.voyageForm.controls.paysc.value
  }
 /* datec(): boolean {
    return this.voyageForm.controls.datec.value
  }*/
  onSubmit() {
    console.log(this.voyageForm.controls.lib.value);
    if(this.voyageForm.controls.paysc.value)
    {
      this.ListeVoyages=this.voyageService.VoyagesByLib(this.voyageForm.controls.lib.value);
    }
  }
}
