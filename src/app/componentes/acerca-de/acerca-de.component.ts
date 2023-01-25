import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { PopPupTextComponent } from '../pop-pup-text/pop-pup-text.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/Persona';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  //miPortfolio:any;
  form:FormGroup;
  persona:Persona;
  errorMessage = '';

  constructor(private formBuilder:FormBuilder,private datosPortfolio:PortfolioService, private modal: NgbModal) { 
    this.persona = new Persona(); 
    this.form = this.formBuilder.group({
      id_per:[0],
      nombre:[''],
      apellido:[''],
      fechaNac:[''],
      telefono:[''],
      sobre_mi:[''],
      correo:[''],
      url_foto:[''],
      url_fondo:['']
    });   
  }

  ngOnInit(): void {
   
      this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log ("Acerca De" + JSON.stringify(data));
      this.persona.id_per = data.id_per;
      this.persona.nombre = data.nombre;
      this.persona.apellido = data.apellido;
      this.persona.fechaNac = data.fechaNac;
      this.persona.telefono = data.telefono;
      this.persona.sobre_mi = data.sobre_mi;
      this.persona.correo = data.correo;
      this.persona.url_foto = data.url_foto;
      this.persona.url_fondo = data.url_fondo;      
    })
  }

  openPopPup(contenido:any){
    this.form.controls['id_per'].setValue(this.persona.id_per);
    this.form.controls['nombre'].setValue(this.persona.nombre);
    this.form.controls['apellido'].setValue(this.persona.apellido);
    let fecha = new Date(this.persona.fechaNac);
    fecha.setMinutes(fecha.getMinutes() + fecha.getTimezoneOffset())
    this.form.controls['fechaNac'].setValue(formatDate(fecha,'yyyy-MM-dd','en'));    
    this.form.controls['telefono'].setValue(this.persona.telefono);
    this.form.controls['sobre_mi'].setValue(this.persona.sobre_mi);
    this.form.controls['correo'].setValue(this.persona.correo);
    this.form.controls['url_foto'].setValue(this.persona.url_foto);
    this.form.controls['url_fondo'].setValue(this.persona.url_fondo);
    this.modal.open(contenido,{size:'xl'})
  }
  

  guardarCambios():void{
    //this.persona.sobre_mi = this.form.controls['sobre_mi'].value; 
    this.datosPortfolio.guardarPersona(this.form.value).subscribe(
      //(response: any) => {
      //console.log(response);});
    //console.log(JSON.stringify(this.form.value));
      {
        next: data => {
          this.modal.dismissAll();
          window.location.reload();
        },
        error: err =>{
          alert('Error al modificar');
          this.errorMessage = err.error.message;
        }  
    
    });
  }
}