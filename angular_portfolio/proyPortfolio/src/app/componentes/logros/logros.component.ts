import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { InvokeFunctionExpr } from '@angular/compiler';
import { logro } from 'src/app/models/logro';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {
  logrosList:logro[] = [];
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
//      console.log(data);
      this.logrosList = data.project;    
    })       
  }

  deleteListaLogro(logro:logro){     
    this.datosPortfolio.deleteLogro(logro).subscribe(() =>{
      this.logrosList = this.logrosList.filter( p =>p.id !== logro.id)
      console.log(logro);
    }) 
  
  }

}
