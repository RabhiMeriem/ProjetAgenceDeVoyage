import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(private fb:FormBuilder, private voyageService:VoyageService) { }

  ngOnInit(): void {
    this.ajoutForm=this.fb.group({
      pays:[""],
      lib:[""],
      prix:[],
      promo:[],
      date_dep:[""],
      date_arr:[""],
      detail:[""],
      photo: this.fb.array([])
    })
    this.voyageService.getVoyages().subscribe( data => this.listeV = data)
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
  }
}
