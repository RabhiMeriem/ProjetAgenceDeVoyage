import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Commentaire } from 'src/app/Classes/commentaire';
import { Voyage } from 'src/app/Classes/voyage';
import { CommentaireService } from 'src/app/Services/commentaire.service';
import { VoyageService } from 'src/app/Services/voyage.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  lespays: string[] = [];
  tab: Commentaire[] = [];
  listeVoyage: Voyage[] = [];
  voyageForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private commentaireService: CommentaireService, private voyageService: VoyageService) { }

  ngOnInit(): void {
    this.commentaireService.getCommentaires().subscribe(data => this.tab = data);

    this.voyageService.getVoyages().subscribe(data => this.listeVoyage = data, error => { }, () => {
      for (var i = 0; i < this.listeVoyage.length; i++) {
        this.lespays.push(this.listeVoyage[i].pays);
      }
      for (var i = 0; i < this.lespays.length; i++) {
        for (var j = i + 1; j < this.lespays.length; j++) {
          if (this.lespays[j] == this.lespays[i])
            this.lespays.splice(j - 1, 1);
        }
      }
    });
    this.voyageService.getVoyages().subscribe(data => this.listeVoyage = data);

    this.voyageForm = this.fb.group({
      datedep: [""],
      datedarr: [""],
      pays: [""],
      datec: [false],
      paysc: [false],
      tous: [true]
    });
  }
  supprimerCom(id: number) {
    this.commentaireService.supprimerCommentaire(id).subscribe(() => this.tab = this.tab.filter(v => v.id != id));
  }
  suppVoy(id: number) {
    this.voyageService.supprimerVoyage(id).subscribe(() => this.listeVoyage = this.listeVoyage.filter(v => v.id != id));
  }
  paysc(): boolean {
    return this.voyageForm.controls.paysc.value
  }
  datec(): boolean {
    return this.voyageForm.controls.datec.value
  }
  tous() {
    return !this.voyageForm.controls.datec.value && !this.voyageForm.controls.paysc.value
  }
  onSubmit() {
    if (this.voyageForm.controls.paysc.value && this.voyageForm.controls.datec.value == false) {
      this.voyageService.VoyagesByPays(this.voyageForm.controls.pays.value).subscribe(data => this.listeVoyage = data);
    }
    else if (this.voyageForm.controls.datec.value && this.voyageForm.controls.paysc.value == false) { this.voyageService.VoyagesByDate(this.voyageForm.controls.datedep.value, this.voyageForm.controls.datedarr.value).subscribe(data => this.listeVoyage = data); }
    else if (this.voyageForm.controls.tous.value && !this.voyageForm.controls.paysc.value && !this.voyageForm.controls.datec.value) { this.voyageService.getVoyages().subscribe(data => this.listeVoyage = data); }
    else {
      this.voyageService.VoyagesByDatePays(this.voyageForm.controls.datedep.value, this.voyageForm.controls.datedarr.value, this.voyageForm.controls.pays.value).subscribe(data => this.listeVoyage = data);
    }
  }
}
