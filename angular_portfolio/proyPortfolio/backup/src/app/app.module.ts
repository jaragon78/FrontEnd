import { LOCALE_ID, NgModule } from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
//import { ExperienciaYEducacionComponent } from './componentes/experiencia-y-educacion/experiencia-y-educacion.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { LogrosComponent } from './componentes/logros/logros.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PagenotfoundComponent } from './componentes/pagenotfound/pagenotfound.component';
//import { LoginComponent } from './componentes/login/login.component';
import { TopNavBarComponent } from './componentes/top-nav-bar/top-nav-bar.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
//import { AptitudComponent } from './componentes/aptitud/aptitud.component';
//import { LogroComponent } from './componentes/logro/logro.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { InterceptorService } from './servicios/interceptor.service';
import { PopPupTextComponent } from './componentes/pop-pup-text/pop-pup-text.component';
import { RegisterComponent } from './componentes/register/register.component';
import { OrderModule } from 'ngx-order-pipe';
import localeEs from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { HomeComponent } from './componentes/home/home.component';
import { BoardAdminComponent } from './componentes/board-admin/board-admin.component';
import { BoardModeratorComponent } from './componentes/board-moderator/board-moderator.component';
import { BoardUserComponent } from './componentes/board-user/board-user.component';
registerLocaleData(localeEs,'es'); 


@NgModule({
  declarations:[
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    AptitudesComponent,
    PagenotfoundComponent,
    TopNavBarComponent,
    EducacionComponent,
    ExperienciaComponent,
    LogrosComponent,    
    IniciarSesionComponent,
    PortfolioComponent,
    PopPupTextComponent,
    RegisterComponent,
    PerfilComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule, 
    FormsModule, 
    ReactiveFormsModule, 
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
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
    FontAwesomeModule,
    CommonModule, OrderModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [PortfolioService, {provide: LOCALE_ID, useValue: 'es'},
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
