import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = []
  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.getAllPersonas()
  //  let Persona1 = new Persona("Hernan", "Borre", 28)
  //  this.personas.push(Persona1)
  //  this.personas.push(new Persona("Alejandro", "Fantino", 55))
  //  this.personas.push(new Persona("Nicky", "Nicole", 25))
  }

  getAllPersonas():void{
   // this.personas = this.personaService.getAllPersonas() 
    this.personaService.getAllPersonas().subscribe( personas =>{
      this.personas = personas
    })   
  }

  borrarPersonaDeLista(personaParaBorrar:Persona){
   // this.personas = this.personas.filter(p=>p.nombre != personaParaBorrar.nombre)

    this.personaService.deletePersona(personaParaBorrar).subscribe(() =>{
      this.personas = this.personas.filter(p=>p.id !== personaParaBorrar.id)
    })  
  }

  addPersona(persona:Persona){
    this.personaService.addPersona(persona).subscribe(persona=>
      this.personas.push(persona));
  }

}
