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
import { ListFavorisComponent } from './Application/list-favoris/list-favoris.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListVoyagesComponent,
    SelectedVoyageComponent,
    ErrorComponent,
    HomeComponent,
    ListFavorisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
