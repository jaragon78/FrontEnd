import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Experiencia } from 'src/app/models/Experiencia';
import { Educacion } from 'src/app/models/Educacion';
import { aptitud } from 'src/app/models/aptitud';
import { logro } from 'src/app/models/logro';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  apiUrl =  'https://yoprogramo-jaragon78.koyeb.app'; //'http://localhost:8080'; //
  filterPost = '';
  posts: any[];
  persona: Persona;
  experienciaList: Experiencia[] = [];
  educacionList: Educacion[] = [];
  aptitudesList: aptitud[] = [];
  logrosList:logro[] = [];
  mostrarPerfil: boolean;
  mostrarAcercaDe: boolean;
  mostrarExperiencia: boolean;
  mostrarEducacion: boolean;
  mostrarAptitudes: boolean;
  mostrarLogros: boolean;
  fechaInicio;
  fechaFin;
  form:FormGroup;

  constructor(private datosPortfolio:PortfolioService, private http:HttpClient,
    private formBuilder:FormBuilder, private modal: NgbModal) { 

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
      this.fechaInicio = new Date;
      this.fechaFin = new Date;  
      this.mostrarPerfil = false;
      this.mostrarAcercaDe = false;
      this.mostrarExperiencia = false;
      this.mostrarEducacion = false;
      this.mostrarAptitudes = false;
      this.mostrarLogros = false;    
    } 

  ngOnInit() {
    this.datosPortfolio.obtenerListaUser().subscribe(data =>{
      console.log ("Lista de usuarios" + JSON.stringify(data));
      this.posts = data;

    })
  }

  visualizarPerfil(username:any){
    this.persona = new Persona();
    console.log ( JSON.stringify(username));
    this.datosPortfolio.verPerfil(username).subscribe( data =>{
      console.log ("Datos de suario" + JSON.stringify(data));
      this.http.get<any>(this.apiUrl+"/get/persona/"+ data.personaId).subscribe( data =>{
      this.persona = data;
      this.mostrarPerfil = true; 
      if (this.persona.sobre_mi !== null){
        this.mostrarAcercaDe = true;
      }else{
        this.mostrarAcercaDe = false;
      } 
    });

    this.http.get<any>(this.apiUrl+"/ver/listaExpLaboral/"+ data.personaId).subscribe(data =>{
      this.experienciaList = data;
      if (this.experienciaList[0] != null){
        this.mostrarExperiencia = true;
      }else{
        this.mostrarExperiencia = false;
      } 
    }) 

    this.http.get<any>(this.apiUrl+"/ver/listaEducacion/"+ data.personaId).subscribe(data =>{
      this.educacionList = data;
      if (this.educacionList[0] != null){
        this.mostrarEducacion = true;
      }else{
        this.mostrarEducacion = false;
      }
    }) 

    this.http.get<any>(this.apiUrl+"/ver/listaTecnologias/"+ data.personaId).subscribe(data =>{
      this.aptitudesList = data;
      if (this.aptitudesList[0] != null){
        this.mostrarAptitudes = true;
      }else{
        this.mostrarAptitudes = false;
      }
    })

    this.http.get<any>(this.apiUrl+"/ver/listaProyecto/"+ data.personaId).subscribe(data =>{
      this.logrosList = data;
      if (this.logrosList[0] != null){
        this.mostrarLogros = true;
      }else{
        this.mostrarLogros = false;
      }
    })
  })
  }

  modificarFechas(fecha:string){
    //for (let i = 0; i < this.educacionList.length; i++) {
      console.log(fecha)
      this.fechaInicio = new Date(fecha);
      return this.fechaInicio.setMinutes(this.fechaInicio.getMinutes() + this.fechaInicio.getTimezoneOffset())
  }

  openContacto(contenido2:any){
    this.form.controls['telefono'].setValue(this.persona.telefono);
    this.form.controls['telefono'].disable();
    this.form.controls['correo'].setValue(this.persona.correo);
    this.form.controls['correo'].disable();
    this.modal.open(contenido2, {
      centered: true,
      backdrop: 'static',
      size:'md'
     });
  }
}
