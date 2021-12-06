import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  modifForm:FormGroup=new FormGroup({});
  photosForm:FormGroup=new FormGroup({});
  tabPhotos:string[];
  constructor(private s:MatSnackBar,private voyageService:VoyageService,private fb:FormBuilder,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ident=this.ar.snapshot.params['id'];
    this.voyageService.getVoyageById(this.ident).subscribe(data=>{
      this.modifForm=this.fb.group({
        id:[{value:this.ident,disabled:true}],
        pays:[data[0].pays],
        lib:[data[0].lib],
        prix:[data[0].prix],
        promo:[data[0].promo],
        date_dep:[data[0].date_dep],
        date_arr:[data[0].date_arr],
        photo: this.fb.array(data[0].photo)
      });
      this.voy=this.modifForm.value;
    });
    this.photosForm=this.fb.group({
      photos: this.fb.array([])
    });
  }
  onAjouterImages() {
    this.photos.push(new FormControl());
  }
conf:boolean=false;
  confirmer()
  {
    this.conf=true;
  }
  delInput(index: number): void { const arrayControl = <FormArray>this.photosForm.controls['photos']; arrayControl.removeAt(index); }
  supprimerPhoto(index: number): void {
    console.log("index: "+index);
    console.log(this.modifForm.controls['photo'].value);
    if (index !== -1) {
      this.voy.photo.splice(index, 1);
  }
    const arrayControl = <FormArray>this.modifForm.controls['photo'];
    arrayControl.removeAt(index);
    console.log(this.voy.photo);
  }
  public get photos()
{
return this.photosForm.get('photos') as FormArray;
}
onSubmit(){
  this.voy.pays = this.modifForm.controls.pays.value;
  this.voy.lib=this.modifForm.controls.lib.value;
  this.voy.date_arr=this.modifForm.controls.date_arr.value;
  this.voy.date_dep=this.modifForm.controls.date_dep.value;
  this.voyageService.modifierVoyage(this.ident,this.voy).subscribe();
  this.openSnackBar();
}
onAjouter()
{
  this.voy.photo = this.voy.photo.concat(this.photosForm.controls.photos.value);
    for(let p of this.photosForm.controls.photos.value) {
      this.delInput(p);
    }
    this.photosForm.reset();
}
openSnackBar() {
  this.s.open("Voyage modifié",'ok',{duration:5000});
}
}
