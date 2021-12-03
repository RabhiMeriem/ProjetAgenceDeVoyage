import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Voyage } from 'src/app/Classes/voyage';
import { VoyageService } from 'src/app/Services/voyage.service';

@Component({
  selector: 'app-modifier-voyage',
  templateUrl: './modifier-voyage.component.html',
  styleUrls: ['./modifier-voyage.component.css']
})
export class ModifierVoyageComponent implements OnInit {
  voy:Voyage[];
  ident:number;
  modifForm:FormGroup=new FormGroup({});
  
  constructor(private voyageService:VoyageService,private fb:FormBuilder,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ident=this.ar.snapshot.params['id'];
    this.voyageService.getVoyageById(this.ident).subscribe(data=>this.voy[0]=data[0]);
    this.modifForm=this.fb.group({
      id:[this.voy[0].id],
      pays:[this.voy[0].pays],
      lib:[this.voy[0].lib],
      prix:[this.voy[0].prix],
      promo:[this.voy[0].promo],
      date_dep:[this.voy[0].date_dep],
      date_arr:[this.voy[0].date_arr],
      photo: this.fb.array([])
    })
    
    // this.modifForm.valueChanges.subscribe(data=>console.log(data));
  }
  public get photo()
{
return this.modifForm.get('photo') as FormArray;
}
onAjouterImages()
{
this.photo.push(this.fb.control(this.voy[0].photo[this.photo.value.length]));
}
  onSubmit()
  {
     for(let i = 0;i<this.modifForm.controls.photo.value.length;i++)
     {
       if(this.modifForm.controls.photo.value[i]=="" ||this.modifForm.controls.photo.value[i]==undefined)
       {
         this.modifForm.controls.photo.value[i]=this.voy[0].photo[i];
       }
     }
     if(this.modifForm.controls.photo.value.length<this.voy[0].photo.length)
     {
       for(let i = this.modifForm.controls.photo.value.length;i<this.voy[0].photo.length;i++)
      {
         this.modifForm.controls.photo.value[i]=this.voy[0].photo[i];
       }
     }
     this.voyageService.modifierVoyage(this.modifForm.value.id,this.modifForm.value);
   }
}
