import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { aptitud } from 'src/app/models/aptitud';

@Component({ 
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})

export class AptitudesComponent implements OnInit {
  aptitudesList: aptitud[] = [];
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
 //     console.log(data);
      this.aptitudesList = data.HardSoftSkills;   
    })     
  }

  deleteListaApt(aptitud:aptitud){     
    this.datosPortfolio.deleteAptitud(aptitud).subscribe(() =>{
      this.aptitudesList = this.aptitudesList.filter( p =>p.id !== aptitud.id)
      console.log(aptitud);
    }) 
  
  }
}
