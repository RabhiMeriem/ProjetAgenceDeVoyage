import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Voyage } from 'src/app/Classes/voyage';
import { VoyageService } from 'src/app/Services/voyage.service';

@Component({
  selector: 'app-ajouter-voyage',
  templateUrl: './ajouter-voyage.component.html',
  styleUrls: ['./ajouter-voyage.component.css']
})
export class AjouterVoyageComponent implements OnInit {
  ajoutForm:FormGroup;
  listeV:Voyage[]=[];
  constructor(private s:MatSnackBar,private fb:FormBuilder, private voyageService:VoyageService) { }

  ngOnInit(): void {
    this.ajoutForm=this.fb.group({
      pays:["",[Validators.required,Validators.pattern("^([A-Z][a-z]+)$")]],
      // ou [A-Z][a-z]+( [A-Z][a-z]+)+
      lib:["",[Validators.required,Validators.pattern("^([A-Z][a-z]+)$")]],
      prix:[0,Validators.required],
      promo:[0,Validators.required],
      date_dep:["",Validators.required],
      date_arr:["",Validators.required],
      detail:["",Validators.required],
      photo: this.fb.array([])
    })
    this.voyageService.getVoyages().subscribe( data => this.listeV = data)
  }
  isValidPays()
  {
    return this.ajoutForm.controls.pays.errors?.pattern && this.ajoutForm.controls.pays.dirty;
  }
  isValidLib()
  {
    return this.ajoutForm.controls.lib.errors?.pattern && this.ajoutForm.controls.lib.dirty;
  }
  public get photo()
{
return this.ajoutForm.get('photo') as FormArray;
}
onAjouterImages()
{
this.photo.push(this.fb.control(''));
}

  onSubmit()
  {
    this.voyageService.addVoyage(this.ajoutForm.value).subscribe();
    this.openSnackBar();
    this.ajoutForm.reset();
  }
  openSnackBar() {
    this.s.open("Voyage ajouté",'ok',{duration:5000});
  }
}
