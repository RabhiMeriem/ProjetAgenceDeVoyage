import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voyage } from '../Classes/voyage';
const URL = "http://localhost:3000/voyage";
@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  constructor(private http: HttpClient) { }

  getVoyages(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(URL);
  }
  getVoyageById(id: number): Observable<Voyage> { return this.http.get<Voyage>(URL + "?id=" + id); }
  VoyagesByPays(pays: string): Observable<Voyage[]> {
    pays = pays.charAt(0).toUpperCase() + pays.substr(1);
    return this.http.get<Voyage[]>(URL + "?pays=" + pays);
  }
  VoyagesByDate(Dep: string, Arr: string): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(URL + "?date_dep=" + Dep + "&date_arr=" + Arr);
  }
  VoyagesByDatePays(Dep: string, Arr: string, pays: string): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(URL + "?date_dep=" + Dep + "&date_arr=" + Arr + "&pays=" + pays);
  }
  addVoyage(v: Voyage): Observable<Voyage> {
    return this.http.post<Voyage>(URL, v);
  }
  supprimerVoyage(id: number) {
    return this.http.delete(URL + "/" + id);
  }
  modifierVoyage(id: number, v: Voyage): Observable<Voyage> {
    return this.http.put<Voyage>(URL + "/" + id, v);
  }
}
