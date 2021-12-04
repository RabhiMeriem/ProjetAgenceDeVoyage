import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/Classes/commentaire';
import { CommentaireService } from 'src/app/Services/commentaire.service';

@Component({
  selector: 'app-commentaire-admin',
  templateUrl: './commentaire-admin.component.html',
  styleUrls: ['./commentaire-admin.component.css']
})
export class CommentaireAdminComponent implements OnInit {
listeCom:Commentaire[]=[];
  constructor(private commentaireService: CommentaireService) { }

  ngOnInit(): void {
    this.commentaireService.getCommentaires().subscribe(data=>this.listeCom=data);
  }
  onSupprimer(id)
  {
    this.commentaireService.supprimerCommentaire(id).subscribe(()=>this.listeCom = this.listeCom.filter(v=>v.id!=id))
  }
}
