import { Injectable } from '@angular/core';
import { Commentaire } from '../Classes/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  tabCom: Commentaire[] = [];
  constructor() { }
  addCommentaire(commentaire: Commentaire) {
    var c1 = Object.assign({}, commentaire);
    this.tabCom.push(c1);
  }
  getCommentaire() { return this.tabCom;}
  suppCommentaire() {
    
  }
}
