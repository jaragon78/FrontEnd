import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { logro } from 'src/app/models/logro';

@Component({
  selector: 'app-logro',
  templateUrl: './logro.component.html',
  styleUrls: ['./logro.component.css']
})
export class LogroComponent implements OnInit {

  @Input() logro: logro = new logro()
  @Output() deleteItemLogro:EventEmitter<logro> = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteLogro(logro: logro){     
    console.log(logro)  
    this.deleteItemLogro.emit(logro)
  }
}
