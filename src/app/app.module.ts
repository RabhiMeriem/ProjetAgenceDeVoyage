import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Application/menu/menu.component';
import { ListVoyagesComponent } from './Application/list-voyages/list-voyages.component';
import { SelectedVoyageComponent } from './Application/selected-voyage/selected-voyage.component';
import { ErrorComponent } from './Application/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListVoyagesComponent,
    SelectedVoyageComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
