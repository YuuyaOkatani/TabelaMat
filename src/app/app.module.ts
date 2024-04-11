import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Tela1Component } from '../app/screens/tela1/tela1.component';
import { Tela2Component } from '../app/screens/tela2/tela2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Tela1Component,
    Tela2Component
  ],
  imports: [
    FormsModule, 
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule, 
    NgbModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
