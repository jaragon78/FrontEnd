import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaYEducacionComponent } from './componentes/experiencia-y-educacion/experiencia-y-educacion.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { LogrosComponent } from './componentes/logros/logros.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PagenotfoundComponent } from './componentes/pagenotfound/pagenotfound.component';
import { LoginComponent } from './componentes/login/login.component';
import { TopNavBarComponent } from './componentes/top-nav-bar/top-nav-bar.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { AptitudComponent } from './componentes/aptitud/aptitud.component';
import { LogroComponent } from './componentes/logro/logro.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaYEducacionComponent,
    AptitudesComponent,
    LogrosComponent,
    PagenotfoundComponent,
    LoginComponent,
    TopNavBarComponent,
    EducacionComponent,
    ExperienciaComponent,
    AptitudComponent,
    LogroComponent,
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule, 
    FormsModule, 
    ReactiveFormsModule, 
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      backgroundColor: "teal",
      backgroundPadding: 8,
      radius: 75,
      space: -15,
      maxPercent: 100,
      unitsColor: "#ffffff",
      outerStrokeWidth: 7.5,
      outerStrokeColor: "white",
      innerStrokeColor: "teal",
      innerStrokeWidth: 3,
      titleColor: "#ffffff",
      subtitleColor: "#ffffff"
    }),
    FontAwesomeModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
