import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  @Input() experiencia: Experiencia = new Experiencia()
  @Output() deleteItemExp:EventEmitter<Experiencia> = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteExp(experiencia: Experiencia){     
    console.log(experiencia)  
    this.deleteItemExp.emit(experiencia)
  }

}
