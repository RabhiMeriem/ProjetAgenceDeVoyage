import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Voyage } from 'src/app/Classes/voyage';
import { VoyageService } from 'src/app/Services/voyage.service';

@Component({
  selector: 'app-modifier-voyage',
  templateUrl: './modifier-voyage.component.html',
  styleUrls: ['./modifier-voyage.component.css']
})
export class ModifierVoyageComponent implements OnInit {
  voy:Voyage;
  ident:number;
  modifForm:FormGroup;
  constructor(private voyageService:VoyageService,private fb:FormBuilder,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ident=this.ar.snapshot.params['id'];
    this.voy=this.voyageService.getVoyageById(this.ident);
    this.modifForm=this.fb.group({
      id:[this.voy.id],
      pays:[this.voy.pays],
      lib:[this.voy.lib],
      prix:[this.voy.prix],
      promo:[this.voy.promo],
      date_dep:[this.voy.date_dep],
      date_arr:[this.voy.date_arr]
    })
  }
  onSubmit()
  {
    this.voyageService.modifierVoyage(this.modifForm.value);
  }
}
