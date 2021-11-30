import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { VoyageService } from 'src/app/Services/voyage.service';

@Component({
  selector: 'app-ajouter-voyage',
  templateUrl: './ajouter-voyage.component.html',
  styleUrls: ['./ajouter-voyage.component.css']
})
export class AjouterVoyageComponent implements OnInit {
  ajoutForm:FormGroup;
  constructor(private fb:FormBuilder, private voyageService:VoyageService) { }

  ngOnInit(): void {
    this.ajoutForm=this.fb.group({
      pays:[""],
      lib:[""],
      prix:[],
      promo:[],
      date_dep:[new Date()],
      date_arr:[new Date()],
      images: this.fb.array([])
    })
  }
  public get images()
{
return this.ajoutForm.get('images') as FormArray;
}
onAjouterImages()
{
this.images.push(this.fb.control(''));
}

  onSubmit()
  {
    this.voyageService.addVoyage(this.ajoutForm.value);
  }
}
