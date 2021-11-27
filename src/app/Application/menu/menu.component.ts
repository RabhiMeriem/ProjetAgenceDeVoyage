import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VoyageService } from 'src/app/Services/voyage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  problemeForm: FormGroup = new FormGroup({});
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  constructor(private voyageService: VoyageService, private fb: FormBuilder) { }

  ngOnInit(): void {

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
  ajoutCom(){console.log("Saghrouna <3");}
}
