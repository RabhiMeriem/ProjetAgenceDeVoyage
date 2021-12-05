import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Voyage } from 'src/app/Classes/voyage';
import { VoyageService } from 'src/app/Services/voyage.service';

@Component({
  selector: 'app-modifier-voyage',
  templateUrl: './modifier-voyage.component.html',
  styleUrls: ['./modifier-voyage.component.css']
})
export class ModifierVoyageComponent implements OnInit {
  voy: Voyage;
  ident: number;
  modifForm: FormGroup = new FormGroup({});
  photosForm: FormGroup = new FormGroup({});
  constructor(private voyageService: VoyageService, private fb: FormBuilder, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.ident = this.ar.snapshot.params['id'];
    this.voyageService.getVoyageById(this.ident).subscribe(data => {
      this.modifForm = this.fb.group({
        id: [this.ident],
        pays: [data[0].pays],
        lib: [data[0].lib],
        prix: [data[0].prix],
        promo: [data[0].promo],
        date_dep: [data[0].date_dep],
        date_arr: [data[0].date_arr],
        photo: this.fb.array(data[0].photo)
      });
      this.voy = this.modifForm.value;
    });
    this.photosForm = this.fb.group({
      ph: this.fb.array([])
    });
  }
  public get ph() {
    return this.photosForm.get('ph') as FormArray;
  }
  public get photo() {
    return this.modifForm.get('photo') as FormArray;
  }
  onAjouterImages() {
    this.ph.push(new FormControl());

  }
  delInput(index: number): void { const arrayControl = <FormArray>this.photosForm.controls['ph']; arrayControl.removeAt(index); }
  supprimerPhoto(index: number): void {
    const arraycontrol = <FormArray>this.modifForm.controls['photo']; arraycontrol.removeAt(index);
    this.voy.photo = this.voy.photo.splice(index - 1, 1);
  }
  onAjouter() {
    this.voy.photo = this.voy.photo.concat(this.photosForm.controls.ph.value);
    this.photosForm.reset();
    for(let i=0; i<this.photosForm.controls.ph.value.length; i++) {
      this.delInput(i);
    }
  }
  onSubmit() {
    this.voy = this.modifForm.value;
    console.log(this.voy);
    this.voyageService.modifierVoyage(this.ident, this.voy).subscribe();
  }
}