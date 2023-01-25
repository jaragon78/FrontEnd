import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { LOCALE_ID, NgModule } from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';  
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { OrderModule } from 'ngx-order-pipe';
import localeEs from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
import { EncabezadoComponent } from 'src/app/componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from 'src/app/componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from 'src/app/componentes/educacion/educacion.component';
import { ExperienciaComponent } from 'src/app/componentes/experiencia/experiencia.component';
import { LogrosComponent } from 'src/app/componentes/logros/logros.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { PortfolioService } from './servicios/portfolio.service';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { PostsComponent } from './componentes/posts/posts.component';
import { FilterPipe } from './pipes/filter.pipe';
registerLocaleData(localeEs,'es'); 

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    AptitudesComponent,
    EducacionComponent,
    ExperienciaComponent,
    LogrosComponent,
    EncabezadoComponent, 
    PortfolioComponent,       
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    PostsComponent,
    FilterPipe
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

      space: -15,
      maxPercent: 100,
      unitsColor: "#ffffff",
      outerStrokeWidth: 7.5,
      outerStrokeColor: "white",
      innerStrokeColor: "teal",
      innerStrokeWidth: 3,
      titleColor: "#ffffff",
      subtitleColor: "#ffffff",
      startFromZero: false,
      showZeroOuterStroke: false,
      responsive: true
    }),
    FontAwesomeModule,
    CommonModule, OrderModule
  ],
schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
providers: [PortfolioService, {provide: LOCALE_ID, useValue: 'es'},
],
bootstrap: [AppComponent]
})
export class AppModule { }