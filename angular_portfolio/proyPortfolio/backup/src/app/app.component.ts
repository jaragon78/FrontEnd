import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';
import { AuthService } from './auth.service';
import { StorageService } from './servicios/storage.service';
import { Router } from '@angular/router';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  
  
  constructor(private storageService:StorageService, private authService: AuthService) {}
  
  title = 'proyPortfolio';
  name = 'Angular ' + VERSION.major;


  ngOnInit() {

    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

  }

  logout(): void {
    this.authService.logout().subscribe({
      next: (res: any) => {
        console.log(res);
        this.storageService.clean();
      },
      error: (err: any) => {
        console.log(err);
      }
    });
    
    window.location.reload();
  }
  
  
}


