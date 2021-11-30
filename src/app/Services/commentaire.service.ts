import { Injectable } from '@angular/core';
import { Commentaire } from '../Classes/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  tabCom: Commentaire[] =[];
  n:number=0;
  constructor() { }
  addCommentaire(commentaire: Commentaire) {
    var c1 = Object.assign({}, commentaire);
    c1.id=this.n;
    this.n++;
    this.tabCom.push(c1);
  }
  getCommentaire() { return this.tabCom;}
  suppCommentaire(id:number) {
    this.tabCom.splice(id,1);
    for(let i:number=id;i<this.tabCom.length;i++)
    {
    this.tabCom[i].id--;
    }
  }
}
