import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  @Input() educacion: Educacion = new Educacion()
  @Output() deleteItemEdu:EventEmitter<Educacion> = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteEdu(educacion:Educacion){     
    console.log(educacion)  
    this.deleteItemEdu.emit(educacion)
  }
}
