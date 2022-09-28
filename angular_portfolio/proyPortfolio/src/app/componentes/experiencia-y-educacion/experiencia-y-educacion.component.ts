import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';
import { Experiencia } from 'src/app/models/Experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {
  educacionList: Educacion[] = [];
  experienciaList: Experiencia[] = [];

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
//    this.getAllEducacion()
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
//      console.log(data);
      this.educacionList = data.education;
      this.experienciaList = data.experience;    
    })    
  }

//  getAllEducacion():void{
//    this.datosPortfolio.obtenerDatosEdu().subscribe(educacionList =>{
//      console.log(educacionList);
//       this.educacionList = educacionList
//     })   
//   }

   
  deleteListaEdu(educacion:Educacion){     
    this.datosPortfolio.deleteEducacion(educacion).subscribe(() =>{
      this.educacionList = this.educacionList.filter( p =>p.id !== educacion.id)
      console.log(educacion);
    }) 
  
  }

  deleteListaExp(experiencia:Experiencia){     
    this.datosPortfolio.deleteExperiencia(experiencia).subscribe(() =>{
      this.experienciaList = this.experienciaList.filter( p =>p.id !== experiencia.id)
      console.log(experiencia);
    }) 
  
  }
}
