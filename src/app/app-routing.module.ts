import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterVoyageComponent } from './Application/Admin/ajouter-voyage/ajouter-voyage.component';
import { CommentaireAdminComponent } from './Application/Admin/commentaire-admin/commentaire-admin.component';
import { HomeAdminComponent } from './Application/Admin/home-admin/home-admin.component';
import { ModifierVoyageComponent } from './Application/Admin/modifier-voyage/modifier-voyage.component';
import { ErrorComponent } from './Application/error/error.component';
import { HomeComponent } from './Application/home/home.component';
import { ListVoyagesComponent } from './Application/list-voyages/list-voyages.component';
import { OmraComponent } from './Application/omra/omra.component';
import { SelectedVoyageComponent } from './Application/selected-voyage/selected-voyage.component';

const routes: Routes = [
  {path:'listeVoyages',component:ListVoyagesComponent},
  {path:'listeVoyages/:id',component:SelectedVoyageComponent},
  {path:'home',component:HomeComponent},
  {path:'commentaireAdmin',component:CommentaireAdminComponent},
  {path:'omra',component:OmraComponent},
  {path:'homeAdmin',component:HomeAdminComponent},
  {path:'ajouterVoyage',component:AjouterVoyageComponent},
  {path:'modifierVoyage/:id',component:ModifierVoyageComponent},
  {path:'', redirectTo:'listeVoyages', pathMatch:'full'},
  {path:'**' ,component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
