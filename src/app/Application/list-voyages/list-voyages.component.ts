import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  voyageForm: FormGroup = new FormGroup({});
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  tabCom: Commentaire[] = [];
  lespays: string[] = [];
  testPays:string[] =this.lespays;
  type: string[] = ["Signaler un problème sur le site Web", "Donner une note à mon expérience sur la page web", "Donner mon avis sur le produit que j'ai acheté", "j'ai besoin d'aide", "J'ai une suggestion/idée", "Autre"];
  constructor(private s:MatSnackBar,private voyageService: VoyageService, private fb: FormBuilder, private CService: CommentaireService) { }

  ngOnInit(): void {
    this.voyageService.getVoyages().subscribe(data => this.ListeVoyages = data, error => { }, () => {
      for (var i = 0; i < this.ListeVoyages.length; i++) {
          this.lespays.push(this.ListeVoyages[i].pays);
      }
      for (var i = 0; i < this.lespays.length; i++) {
        for(var j=i+1;j< this.lespays.length;j++){
          if(this.lespays[j]==this.lespays[i]) 
          this.lespays.splice(j-1,1);
        }
    }
    });
    this.voyageService.getVoyages().subscribe( data => this.ListeVoyages = data);
    this.voyageForm = this.fb.group({
      datedep: [""],
      datedarr: [""],
      pays: [""],
      datec: [false],
      paysc: [false],
      tous:[true]
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

  }
  paysc(): boolean {
    return this.voyageForm.controls.paysc.value
  }
  datec(): boolean {
    return this.voyageForm.controls.datec.value
  }
tous()
{
  return !this.voyageForm.controls.datec.value && !this.voyageForm.controls.paysc.value
}
  onSubmit() {
    if (this.voyageForm.controls.paysc.value && this.voyageForm.controls.datec.value == false) {
      this.voyageService.VoyagesByPays(this.voyageForm.controls.pays.value).subscribe(data => this.ListeVoyages = data);
    }
    else if (this.voyageForm.controls.datec.value && this.voyageForm.controls.paysc.value == false) { this.voyageService.VoyagesByDate(this.voyageForm.controls.datedep.value, this.voyageForm.controls.datedarr.value).subscribe(data => this.ListeVoyages = data); }
    else if(this.voyageForm.controls.tous.value && !this.voyageForm.controls.paysc.value && !this.voyageForm.controls.datec.value){    this.voyageService.getVoyages().subscribe( data => this.ListeVoyages = data);}
    else {
      this.voyageService.VoyagesByDatePays(this.voyageForm.controls.datedep.value, this.voyageForm.controls.datedarr.value, this.voyageForm.controls.pays.value).subscribe(data => this.ListeVoyages = data);
    }
  }
  ajoutCom() {
    let c = new Commentaire(0, this.firstFormGroup.controls.firstCtrl.value, this.secondFormGroup.controls.secondCtrl.value, this.thirdFormGroup.controls.thirdCtrl.value, this.fourthFormGroup.controls.fourthCtrl.value);
    this.CService.addCommentaire(c).subscribe();
    this.openSnackBar();
  }
  promo(v: Voyage) {
    if (v.promo != 0) {
      return v.prix - (v.prix * (v.promo / 100));
    }
    else return v.prix;
  }

openSnackBar() {
  this.s.open("Votre commentaire a été envoyé aux administrateurs",'ok',{duration:5000});
}
}
