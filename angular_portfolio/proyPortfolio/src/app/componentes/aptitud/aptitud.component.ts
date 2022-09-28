import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { aptitud } from 'src/app/models/aptitud';


@Component({
  selector: 'app-aptitud',
  templateUrl: './aptitud.component.html',
  styleUrls: ['./aptitud.component.css']
})
export class AptitudComponent implements OnInit {
  @Input() aptitud: aptitud = new aptitud()
  @Output() deleteItemApt:EventEmitter<aptitud> = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteApt(aptitud: aptitud){     
    console.log(aptitud)  
    this.deleteItemApt.emit(aptitud)
  }
}




