import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CapitalizadoPipe } from './capitalizado.pipe';
import { OrderPipe } from './order.pipe';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';


//Rutas de Navegacion
const appRoutes:Routes=[
  {path: '', component:InicioComponent},
  {path:'pagina1', component:Pagina1Component},
  {path:'pagina2', component:Pagina2Component},

];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CapitalizadoPipe,
    OrderPipe,   
    Pagina1Component,
    Pagina2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,RouterModule.forRoot(appRoutes), BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
