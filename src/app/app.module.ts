import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Application/menu/menu.component';
import { ListVoyagesComponent } from './Application/list-voyages/list-voyages.component';
import { SelectedVoyageComponent } from './Application/selected-voyage/selected-voyage.component';
import { ErrorComponent } from './Application/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Application/home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { VoyagePipePipe } from './Pipes/voyage-pipe.pipe';
import { OmraComponent } from './Application/omra/omra.component';
import { LoginComponent } from './Application/login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MenuAdminComponent } from './Application/Admin/menu-admin/menu-admin.component';
import { FooterComponent } from './Application/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ModifierVoyageComponent } from './Application/Admin/modifier-voyage/modifier-voyage.component';
import { AjouterVoyageComponent } from './Application/Admin/ajouter-voyage/ajouter-voyage.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeAdminComponent } from './Application/Admin/home-admin/home-admin.component';
import { CommentaireAdminComponent } from './Application/Admin/commentaire-admin/commentaire-admin.component';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListVoyagesComponent,
    SelectedVoyageComponent,
    ErrorComponent,
    HomeComponent,
    VoyagePipePipe,
    OmraComponent,
    LoginComponent,
    MenuAdminComponent,
    FooterComponent,
    ModifierVoyageComponent,
    AjouterVoyageComponent,
    HomeAdminComponent,
    CommentaireAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSidenavModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatIconModule,
    MdbCarouselModule,
    MatSnackBarModule,
    MatBadgeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
