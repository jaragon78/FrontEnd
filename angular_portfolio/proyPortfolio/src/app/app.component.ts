import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';
import { AuthService } from './auth.service';
import { LoginComponent } from './componentes/login/login.component';
import { Router } from '@angular/router';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})

export class AppComponent implements OnInit {
  constructor() {}
  
  title = 'proyPortfolio';
  name = 'Angular ' + VERSION.major;
  authService: any;

  ngOnInit() {}

  
  
}


