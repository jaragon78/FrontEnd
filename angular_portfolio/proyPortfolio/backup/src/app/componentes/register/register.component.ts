import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router, UrlSerializer } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { formatDate } from '@angular/common'
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  existeMail: boolean;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';  

  constructor(private formBuilder:FormBuilder, private authService:AuthService, private ruta:Router, private http: HttpClient,
    private datosPortfolio:PortfolioService) {
    this.existeMail = false;  
    this.form=this.formBuilder.group({
      username:['',[Validators.required]],
      nombre:['',[Validators.required]],
      apellido:['', [Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confPassword:['',[Validators.required,Validators.minLength(8)]],
       // deviceInfo:this.formBuilder.group({
       //   deviceId: ["17867868768"],
       //   deviceType: ["DEVIVE_TYPE_ANDROID"],
       //   notificationToken:["67657575eececc34"]
       // })
      })  
    
  }

  ngOnInit(): void {
  }

  get Username(){
    return this.form.get ('username')
  }
  get Nombre(){
    return this.form.get ('nombre')
  }
  get Apellido(){
    return this.form.get ('apellido')
  }

  get Email(){
    return this.form.get ('email')
  }
  get Password(){
    return this.form.get ('password')
  }

  get confPassword(){
    return this.form.get ('confPassword')
  }

  register() {
    //event.preventDefault;
    const user = { username: this.Username?.value, nombre: this.Nombre?.value, apellido: this.Apellido?.value, email: this.Email?.value, password: this.Password?.value };
        
    if( this.form.valid){
      this.datosPortfolio.existeUsr(user.email).subscribe(data =>{
        this.existeMail = data;
          console.log(this.existeMail);})
 
      if (!this.existeMail){
      alert('El usuario con ese mail ya existe!!!')
        this.ruta.navigate(['/register']);
      }else{
        
        //alert('formualario válido')
        //console.log(user);
        this.authService.register(user.username,user.email,user.password).subscribe({
          next: data => {
          this.authService.register(data.username, data.email, data.password);
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.ruta.navigate(['/iniciar-sesion']);
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
        });
      }
    }else{
      alert('formualario inválido')
      this.ruta.navigate(['/register']);
    }

  }
  cancelar(){
    this.ruta.navigate(['/iniciar-sesion']);
  }

}
