import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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
  tabPhotos: string[];
  constructor(private s: MatSnackBar, private voyageService: VoyageService, private fb: FormBuilder, private ar: ActivatedRoute, private r: Router) { }

  ngOnInit(): void {
    this.ident = this.ar.snapshot.params['id'];
    this.voyageService.getVoyageById(this.ident).subscribe(data => {
      this.modifForm = this.fb.group({
        id: [{ value: this.ident, disabled: true }],
        pays: [data[0].pays],
        lib: [data[0].lib],
        prix: [data[0].prix],
        promo: [data[0].promo],
        date_dep: [data[0].date_dep],
        date_arr: [data[0].date_arr],
        detail: [data[0].detail],
        photo: this.fb.array(data[0].photo)
      });
      this.voy = this.modifForm.value;
    });
    this.photosForm = this.fb.group({
      photos: this.fb.array([])
    });
  }
  onAjouterImages() {
    this.photos.push(new FormControl());
  }
  delInput(index: number): void { const arrayControl = <FormArray>this.photosForm.controls['photos']; arrayControl.removeAt(index); }
  supprimerPhoto(index: number): void {
    if (index !== -1) {
      this.voy.photo.splice(index, 1);
    }
    const arrayControl = <FormArray>this.modifForm.controls['photo'];
    arrayControl.removeAt(index);
  }
  public get photos() {
    return this.photosForm.get('photos') as FormArray;
  }
  onSubmit() {
    this.voy = this.modifForm.value;
    this.voy.photo = this.voy.photo.concat(this.photosForm.controls.photos.value);
    for (let p of this.photosForm.controls.photos.value) {
      this.delInput(p);
    }
    this.photosForm.reset();
    this.voy.pays = this.voy.pays[0].toUpperCase() + this.voy.pays.substr(1);
    this.voy.lib = this.voy.lib[0].toUpperCase() + this.voy.lib.substr(1);
    this.voyageService.modifierVoyage(this.ident, this.voy).subscribe();
    this.openSnackBar();
    this.r.navigate(['homeAdmin']);
  }
  openSnackBar() {
    this.s.open("Voyage modifié", 'ok', { duration: 5000 });
  }
}
