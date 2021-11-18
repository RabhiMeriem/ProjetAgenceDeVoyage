import { Commentaire } from "./commentaire";

export class Voyage {
    constructor(public id: number, public lib:string,public photo:string,public detail:string,public prix:number,public promo:number,public date_dep:Date,public date_arr:Date,public note:number,public comm:Commentaire[]) {}
}
