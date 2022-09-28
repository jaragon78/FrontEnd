import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHandler} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiUrl = 'http://localhost:5001/personas'
  personas: Persona[] = []


  constructor(private http:HttpClient) { }

  getAllPersonas():Observable<Persona[]>{
   // let Persona1 = new Persona("Hernan", "Borre", 28)
   // this.personas.push(Persona1)
   // this.personas.push(new Persona("Alejandro", "Fantino", 55))
  //  this.personas.push(new Persona("Nicky", "Nicole", 25))   

  //  const personas = of(this.personas);
   // return personas
    
    return this.http.get<Persona[]>(this.apiUrl)
  }

  deletePersona(persona:Persona): Observable<Persona>{
    const url = `${this.apiUrl}/${persona.id}`
    return this.http.delete<Persona>(url)  
  }

  addPersona(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.apiUrl, persona)  
  }
}
