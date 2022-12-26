import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { formatDate } from '@angular/common'
import { StorageService } from 'src/app/servicios/storage.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
 // form: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  form: any = {
    username: null,
    password: null
  };

  constructor(private formBuilder:FormBuilder, private authService:AuthService, private ruta:Router, private storageService: StorageService) { 
    this.form=this.formBuilder.group({
      username: null,
      password:['',[Validators.required,Validators.minLength(8)]],
  //    token:[],
  //      deviceInfo:this.formBuilder.group({
  //        deviceId: ["17867868768"],
  //        deviceType: ["DEVIVE_TYPE_ANDROID"],
  //        notificationToken:["67657575eececc34"]
   //     })
      })
      }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  //  if (this.authService.usuarioAutenticado == true){
  //    this.ruta.navigate(['/portfolio']);
  //  }

  //    this.authService.isLogged.subscribe(logged => {
  //      this.isLogged = logged;
  //      if (logged) {
  //        this.userService.getCurrentUser().subscribe(() => {
  //          this.loading = false;
  //        });
  //      }
  //    });
  //    this.authService.checkStatus(); // don't forget this!
    }

  get Email(){
    return this.form.get ('email')
  }
  get Password(){
    return this.form.get ('password')
  }  

  onEnviar():void{
    //event.preventDefault;
   // this.authService.iniciarSesion({ credenciales: this.form.value }).subscribe(data=>{
   // console.log("DATA:" + JSON.stringify(data));
   // this.ruta.navigate(['/portfolio']);
   // })

    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.ruta.navigate(['/portfolio']);
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });  
  }

  registrarUsr(){  
    this.ruta.navigate(['/register']);
  }

  reloadPage(): void {
    window.location.reload();
  }

}
