
import { formatDate } from '@angular/common';
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
  voyageForm: FormGroup = new FormGroup({});
  problemeForm: FormGroup = new FormGroup({});
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  constructor(private voyageService: VoyageService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ListeVoyages = this.voyageService.getVoyages();
    this.voyageForm = this.fb.group({
      datedep:[new Date()],
      datedarr:[new Date()],
      pays: [''],
      datec: [false],
      paysc: [false]
    });
    this.problemeForm=this.fb.group({
      Mail:[""],
      type:[''],
      pb:['']
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
  onSubmit() {
    if(this.voyageForm.controls.paysc.value)
    {
      this.ListeVoyages=this.voyageService.VoyagesByPays(this.voyageForm.controls.pays.value);
    }
    else if(this.voyageForm.controls.datec.value)
    { this.ListeVoyages=this.voyageService.VoyagesByDate(new Date(this.voyageForm.controls.datedep.value),new Date(this.voyageForm.controls.datedarr.value));}
    else
    {
      this.ListeVoyages=this.voyageService.VoyagesByPays(this.voyageForm.controls.pays.value);
      this.ListeVoyages=this.voyageService.VoyagesByDate(new Date(this.voyageForm.controls.datedep.value),new Date(this.voyageForm.controls.datedarr.value));
    }
  }
  ajoutCom(){console.log("Saghrouna <3");}
}
