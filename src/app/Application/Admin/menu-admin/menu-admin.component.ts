import { Component, OnInit } from '@angular/core';
import { CommentaireService } from 'src/app/Services/commentaire.service';


@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
  nbComm:number;
  constructor(private commentaireService:CommentaireService){}
  ngOnInit() {
    this.nbComm = this.commentaireService.getNbCommentaires();
  }
}
