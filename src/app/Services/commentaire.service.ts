import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from '../Classes/commentaire';
const URL="http://localhost:3000/commentaire";
@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  tabCom: Commentaire[] =[];
  n:number=0;
  constructor(private http:HttpClient) { }
  getCommentaires():Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(URL);
    }
    getNbCommentaires(){
      let x:number;
      this.getCommentaires().subscribe(data=>{return x=data[data.length].id});
      return x;
    }
    supprimerCommentaire(id:number)
    {
      return this.http.delete(URL+"/"+ id);
    }
  addCommentaire(commentaire: Commentaire) {
    return this.http.post<Commentaire>(URL,commentaire);
  }
}
