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
  voy:Voyage;
  voy2:Voyage;
  ident:number;
  modifForm:FormGroup=new FormGroup({});
  
  constructor(private voyageService:VoyageService,private fb:FormBuilder,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ident=this.ar.snapshot.params['id'];
    this.voyageService.getVoyageById(this.ident).subscribe(data=>{this.voy=data[0];});
    this.voyageService.getVoyageById(this.ident).subscribe(data=>{this.voy=data[0];},error=>{},()=>{
      this.modifForm=this.fb.group({
      id:[this.voy.id],
      pays:[this.voy.pays],
      lib:[this.voy.lib],
      prix:[this.voy.prix],
      promo:[this.voy.promo],
      date_dep:[this.voy.date_dep],
      date_arr:[this.voy.date_arr],
      photo: this.fb.array([])
    });this.voy2=this.voy;
  });
    console.log(this.modifForm.value);
    // this.modifForm=this.fb.group({
    //   id:[this.voy2.id],
    //   pays:[this.voy2.pays],
    //   lib:[this.voy2.lib],
    //   prix:[this.voy2.prix],
    //   promo:[this.voy2.promo],
    //   date_dep:[this.voy2.date_dep],
    //   date_arr:[this.voy2.date_arr],
    //   photo: this.fb.array([])
    // })
    
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
    console.log("submit: "+this.modifForm.value);
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
