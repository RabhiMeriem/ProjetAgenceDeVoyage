import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Commentaire } from 'src/app/Classes/commentaire';
import { Voyage } from 'src/app/Classes/voyage';
import { CommentaireService } from 'src/app/Services/commentaire.service';
import { VoyageService } from 'src/app/Services/voyage.service';

@Component({
  selector: 'app-list-voyages',
  templateUrl: './list-voyages.component.html',
  styleUrls: ['./list-voyages.component.css']
})
export class ListVoyagesComponent implements OnInit {
  ListeVoyages: Voyage[] = [];
  libVoyages: string[] = [];
  voyageForm: FormGroup = new FormGroup({});
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  tabCom:Commentaire[]=[];
  constructor(private voyageService: VoyageService, private fb: FormBuilder,private CService:CommentaireService) { }

  ngOnInit(): void {
    this.ListeVoyages = this.voyageService.getVoyages();
    this.voyageForm = this.fb.group({
      datedep: [new Date()],
      datedarr: [new Date()],
      pays: [''],
      datec: [false],
      paysc: [false]
    });
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['']
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['']
    });
    this.thirdFormGroup = this.fb.group({
      thirdCtrl: ['']
    });
    this.fourthFormGroup = this.fb.group({
      fourthCtrl: ['']
    });
    this.tabCom=this.CService.getCommentaire();
  }
  paysc(): boolean {
    return this.voyageForm.controls.paysc.value
  }
  datec(): boolean {
    return this.voyageForm.controls.datec.value
  }
  onSubmit() {
    if (this.voyageForm.controls.paysc.value) {
      this.ListeVoyages = this.voyageService.VoyagesByPays(this.voyageForm.controls.pays.value);
    }
    else if (this.voyageForm.controls.datec.value) { this.ListeVoyages = this.voyageService.VoyagesByDate(new Date(this.voyageForm.controls.datedep.value), new Date(this.voyageForm.controls.datedarr.value)); }
    else {
      this.ListeVoyages = this.voyageService.VoyagesByPays(this.voyageForm.controls.pays.value);
      this.ListeVoyages = this.voyageService.VoyagesByDate(new Date(this.voyageForm.controls.datedep.value), new Date(this.voyageForm.controls.datedarr.value));
    }
  }
  ajoutCom() {
    let c=new Commentaire(this.firstFormGroup.controls.firstCtrl.value,this.secondFormGroup.controls.secondCtrl.value,this.thirdFormGroup.controls.thirdCtrl.value,this.fourthFormGroup.controls.fourthCtrl.value);
    this.CService.addCommentaire(c);
  }
  promo(v:Voyage){
    if(v.promo !=0)
    {
    return v.prix-(v.prix*(v.promo/100));}
    else return v.prix;
  }
}
