import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component'
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component'
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component'
//import { ExperienciaYEducacionComponent } from './componentes/experiencia-y-educacion/experiencia-y-educacion.component'
import { LogrosComponent } from './componentes/logros/logros.component'
import { RegisterComponent } from './componentes/register/register.component'
import { PortfolioComponent } from './componentes/portfolio/portfolio.component'
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component'
import { PagenotfoundComponent } from './componentes/pagenotfound/pagenotfound.component'
import { AuthGuard } from './backup/auth.guard';
import { GuardGuard } from './servicios/guard.guard';

import { HomeComponent } from './componentes/home/home.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { BoardUserComponent } from './componentes/board-user/board-user.component';
import { BoardModeratorComponent } from './componentes/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './componentes/board-admin/board-admin.component';

const routes: Routes = [
 // {path: '', pathMatch: 'full', redirectTo: 'iniciar-sesion'},

//  {path: 'iniciar-sesion', component:IniciarSesionComponent},
//  {path: "register", component: RegisterComponent, pathMatch: "full" },

  { path: 'home', component: HomeComponent },
  { path: 'iniciar-sesion', component:IniciarSesionComponent },
 // { path: 'register', component: RegisterComponent },
 // { path: 'profile', component: PerfilComponent },
 // { path: 'user', component: BoardUserComponent },
 // { path: 'mod', component: BoardModeratorComponent },
 // { path: 'admin', component: BoardAdminComponent },
  {path: 'portfolio', component:PortfolioComponent,  canActivate:[GuardGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
//  {path: 'Aptitudes', component:AptitudesComponent},
//  {path: 'Encabezado', component: EncabezadoComponent},
//  {path: 'Experiencia', component:ExperienciaYEducacionComponent},
//  {path: 'AcercaDe', component: AcercaDeComponent},
//  {path: 'Logros', component: LogrosComponent},
//  {path: 'Login', component: LoginComponent},  
//  {path: 'Home', component: EncabezadoComponent,
//    canActivate: [AuthGuard], // visit home only if authenticated},  
  {path: '**', pathMatch: 'full', component: PagenotfoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


 

