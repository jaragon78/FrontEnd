import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { UiService } from 'src/app/services/ui.service'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {
  @Output() onAddPersona: EventEmitter<Persona> = new EventEmitter();
  id: number = 0;
  nombre: string = "";
  apellido: string = "";
  edad: number = 0;
  showAddPersona: boolean = false
  subscrption?: Subscription
  
  constructor(private uiService:UiService) {
    this.subscrption = this.uiService.onToggle().subscribe(value => this.showAddPersona = value)
  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.nombre.length === 0){
      alert("Por favor ingrese el nombre!!!")
      return
    }
    const {id,nombre,apellido,edad} = this
    const newPersona = {id,nombre,apellido,edad}
   
    this.onAddPersona.emit(newPersona)


  }

}
