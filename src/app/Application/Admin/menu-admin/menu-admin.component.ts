import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/Classes/commentaire';
import { Voyage } from 'src/app/Classes/voyage';
import { CommentaireService } from 'src/app/Services/commentaire.service';
import { VoyageService } from 'src/app/Services/voyage.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
  tab:Commentaire[]=[];
  listeVoyage:Voyage[] =[];
  constructor(private commentaireService: CommentaireService,private voyageService:VoyageService) { }

  ngOnInit(): void {
    this.tab=this.commentaireService.getCommentaire();
    this.listeVoyage=this.voyageService.getVoyages();
  }
  supprimerCom(id:number)
  {
    this.commentaireService.suppCommentaire(id);
  }
  suppVoy(id:number)
  {
    this.voyageService.supprimerVoyage(id);
  }
}
