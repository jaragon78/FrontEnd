import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { formatDate } from '@angular/common'

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList: Experiencia[] = [];
  form:FormGroup;
  form2:FormGroup;  
  id_per: number;
  @Input() experiencia: Experiencia = new Experiencia()
  @Output() deleteItem:EventEmitter<Experiencia> = new EventEmitter
  fechaInicio;
  fechaFin;
  errorMessage = '';

  constructor(private datosPortfolio:PortfolioService,  private formBuilder:FormBuilder, 
              private modal: NgbModal, private modal2: NgbModal) {
    this.form = this.formBuilder.group({
      id_expLab:[''],
      nombre_empresa:[''],
      descripcion:[''],
      fechaInicio:[''],
      fechaFin:[''],  
      logo:[''],
      paginaWeb:[''],
      personaId:[0],
    });
    this.form2 = this.formBuilder.group({
      id_expLab:[''],
      nombre_empresa:['',[Validators.required]],
      descripcion:['',[Validators.required]],
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
    this.datosPortfolio.obtenerExp().subscribe(data =>{
      console.log ("Experiencia" + JSON.stringify(data));
      this.experienciaList = data;
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

  borrarItem(experiencia:Experiencia){     
    this.borrarExpLista(experiencia);
  }

 borrarExpLista(experiencia:Experiencia){
   // aca tengo que llamar al service para actualizar la base de datos, mientras tanto actualizo la lista 
   console.log(JSON.stringify(experiencia.id_expLab));
   this.datosPortfolio.deleteExperiencia(experiencia.id_expLab).subscribe(
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

  openPopPup(experiencia:Experiencia,contenido:any){

    console.log(JSON.stringify(experiencia)) 
    this.form.controls['id_expLab'].setValue(experiencia.id_expLab);
    this.form.controls['nombre_empresa'].setValue(experiencia.nombre_empresa);
    this.form.controls['descripcion'].setValue(experiencia.descripcion);
    this.fechaInicio = new Date(experiencia.fechaInicio);
    this.fechaInicio.setMinutes(this.fechaInicio.getMinutes() + this.fechaInicio.getTimezoneOffset())
    this.form.controls['fechaInicio'].setValue(formatDate(this.fechaInicio,'yyyy-MM-dd','en'));
    this.fechaFin = new Date(experiencia.fechaFin);
    this.fechaFin.setMinutes(this.fechaFin.getMinutes() + this.fechaFin.getTimezoneOffset())
    this.form.controls['fechaFin'].setValue(formatDate(this.fechaFin,'yyyy-MM-dd','en'));
    this.form.controls['logo'].setValue(experiencia.logo);
    this.form.controls['paginaWeb'].setValue(experiencia.paginaWeb);
    this.form.controls['personaId'].setValue(experiencia.personaId);

    this.modal.open(contenido,{size:'xl'})
    
  }
  
  
  guardarCambios(experiencia:Experiencia){
    this.form.controls['personaId'].setValue(this.id_per);
    this.datosPortfolio.guardarExperiencia(this.form.value).subscribe(
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
    this.form2.controls['nombre_empresa'].setValue("");
    this.form2.controls['descripcion'].setValue("");
    this.form2.controls['fechaInicio'].setValue("");
    this.form2.controls['fechaFin'].setValue("");
    this.form2.controls['logo'].setValue("");
    this.form2.controls['paginaWeb'].setValue("");
    this.modal2.open(contenido2,{size:'xl'})
  }
  
  agregarExperiencia(event:Event){
    this.form2.controls['personaId'].setValue(this.id_per);
    console.log(this.form2.value)
    this.datosPortfolio.agregarExperiencia(this.form2.value).subscribe(
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
