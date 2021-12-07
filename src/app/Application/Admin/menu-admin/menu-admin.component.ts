import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/Classes/commentaire';
import { CommentaireService } from 'src/app/Services/commentaire.service';


@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
  nbComm:number
  constructor(private commentaireService: CommentaireService){}
  ngOnInit() {
    this.commentaireService.getCommentaires().subscribe(commentaire =>this.nbComm=commentaire.length)
  }
}
