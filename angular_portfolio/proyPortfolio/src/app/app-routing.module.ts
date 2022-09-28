import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component'
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component'
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component'
import { ExperienciaYEducacionComponent } from './componentes/experiencia-y-educacion/experiencia-y-educacion.component'
import { LogrosComponent } from './componentes/logros/logros.component'
import { LoginComponent } from './componentes/login/login.component'
import { PagenotfoundComponent } from './componentes/pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '' },
  {path: 'Aptitudes', component:AptitudesComponent},
//  {path: 'Encabezado', component: EncabezadoComponent},
  {path: 'Experiencia', component:ExperienciaYEducacionComponent},
  {path: 'AcercaDe', component: AcercaDeComponent},
  {path: 'Logros', component: LogrosComponent},
  {path: 'Login', component: LoginComponent},  
  {path: 'Home', component: EncabezadoComponent,
    canActivate: [AuthGuard], // visit home only if authenticated
  },  
  {path: '**', pathMatch: 'full', component: PagenotfoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


 

