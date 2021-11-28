import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAdminComponent } from './Application/Admin/menu-admin/menu-admin.component';
import { ErrorComponent } from './Application/error/error.component';
import { HomeComponent } from './Application/home/home.component';
import { ListVoyagesComponent } from './Application/list-voyages/list-voyages.component';
import { OmraComponent } from './Application/omra/omra.component';
import { SelectedVoyageComponent } from './Application/selected-voyage/selected-voyage.component';

const routes: Routes = [
  {path:'listeVoyages',component:ListVoyagesComponent},
  {path:'listeVoyages/:id',component:SelectedVoyageComponent},
  {path:'home',component:HomeComponent},
  {path:'omra',component:OmraComponent},
  {path:'menuAdmin',component:MenuAdminComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**' ,component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
