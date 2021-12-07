import { Commentaire } from "./commentaire";

export class Voyage {
    constructor(public id: number, public pays: string,
        public lib: string, public photo: string[], public detail: string,
        public prix: number, public promo: number, public date_dep: string,
        public date_arr: string) { }
}

