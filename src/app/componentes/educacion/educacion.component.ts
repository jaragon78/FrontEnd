import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { DATE_PIPE_DEFAULT_TIMEZONE, formatDate } from '@angular/common'
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  @Input() educacion: Educacion = new Educacion()
  @Output() deleteItem:EventEmitter<Educacion> = new EventEmitter
  educacionList: Educacion[] = [];
  id_per: number;
  form:FormGroup;
  form2:FormGroup;
  fechaInicio;
  fechaFin;
  errorMessage = '';

  constructor(private datosPortfolio:PortfolioService, private formBuilder:FormBuilder, 
              private modal: NgbModal, private modal2: NgbModal) { 
    this.form = this.formBuilder.group({
      id_edu:[0],
      universidad:[''],
      titulo:[''],
      fechaInicio:[''],
      fechaFin:[''],  
      logo:[''],
      paginaWeb:[''],
      personaId:[0],
    });
    this.form2 = this.formBuilder.group({
      id_edu:[0],
      universidad:['',[Validators.required]],
      titulo:['',[Validators.required]],
      fechaInicio:['',[Validators.required]],
      fechaFin:['',[Validators.required]],  
      logo:[''],
      paginaWeb:[''],
      personaId:[0],
    });
    this.id_per = 0;
    this.fechaInicio = new Date;
    this.fechaFin = new Date;
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerEdu().subscribe(data =>{
      console.log ("Educacion" + JSON.stringify(data));
      this.educacionList = data;     
    }) 
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log ("Datos Personales" + JSON.stringify(data));
      this.id_per = data.id_per;
    })
  }
  
  modificarFechas(fecha:string){
      console.log(fecha)
      this.fechaInicio = new Date(fecha);
      return this.fechaInicio.setMinutes(this.fechaInicio.getMinutes() + this.fechaInicio.getTimezoneOffset())
  }
  
  borrarItem(educacion:Educacion){     
    this.borrarEduLista(educacion);
  }

 borrarEduLista(educacion:Educacion){
   // aca tengo que llamar al service para actualizar la base de datos, mientras tanto actualizo la lista 
    console.log(JSON.stringify(educacion.id_edu));
    this.datosPortfolio.deleteEducacion(educacion.id_edu).subscribe(
      //(response: any) => {
      {
        next: data => {
          this.modal.dismissAll();
          window.location.reload();
        },
        error: err =>{
          alert('Error al Eliminar');
          this.errorMessage = err.error.message;
        }  
  
      }); 
 }

openPopPup(educacion:Educacion,contenido:any){

  console.log(JSON.stringify(educacion))   
  this.form.controls['id_edu'].setValue(educacion.id_edu);
  this.form.controls['universidad'].setValue(educacion.universidad);
  this.form.controls['titulo'].setValue(educacion.titulo);
  this.fechaInicio = new Date(educacion.fechaInicio);
  this.fechaInicio = new Date(educacion.fechaInicio);
  this.fechaInicio.setMinutes(this.fechaInicio.getMinutes() + this.fechaInicio.getTimezoneOffset())
  this.form.controls['fechaInicio'].setValue(formatDate(this.fechaInicio,'yyyy-MM-dd','es'));
  this.fechaFin = new Date(educacion.fechaFin);
  this.fechaFin.setMinutes(this.fechaFin.getMinutes() + this.fechaFin.getTimezoneOffset())
  this.form.controls['fechaFin'].setValue(formatDate(this.fechaFin,'yyyy-MM-dd','es'));
  this.form.controls['logo'].setValue(educacion.logo);
  this.form.controls['paginaWeb'].setValue(educacion.paginaWeb);
  this.form.controls['personaId'].setValue(educacion.personaId);

  this.modal.open(contenido,{size:'xl'})
  
}

guardarCambios(educacion:Educacion){
  this.form.controls['personaId'].setValue(this.id_per);
  this.datosPortfolio.guardarEducacion(this.form.value).subscribe(
    //(response: any) => {
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

agregarItem(contenido2:any){
  this.form2.controls['universidad'].setValue("");
  this.form2.controls['titulo'].setValue("");
  this.form2.controls['fechaInicio'].setValue("");
  this.form2.controls['fechaFin'].setValue("");
  this.form2.controls['logo'].setValue("");
  this.form2.controls['personaId'].setValue("this.id_per");  
  this.modal2.open(contenido2,{size:'xl'})
}

agregarEducacion(event:Event){
  this.form2.controls['personaId'].setValue(this.id_per);
  console.log(this.form2.value)
  this.datosPortfolio.agregarEducacion(this.form2.value).subscribe(
    //(response: any) => {
    {
      next: data => {
        this.modal.dismissAll();
        window.location.reload();
      },
      error: err =>{
        alert('Error al agregar');
        this.errorMessage = err.error.message;
      }  

    });
  }
}
