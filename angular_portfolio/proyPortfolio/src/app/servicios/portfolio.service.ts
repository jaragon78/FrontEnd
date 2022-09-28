import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { aptitud } from '../models/aptitud';
import { Educacion } from '../models/Educacion';
import { Experiencia } from '../models/Experiencia';
import { logro } from '../models/logro';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = "http://localhost:5001/data"
  educacionList: Educacion[] = []
  experienciaList: Experiencia[] = []
  aptitudList: aptitud[] = []  
  logroList: logro[] = []    

  constructor(private http:HttpClient) { }
  
  obtenerDatos():Observable<any>{
    return this.http.get<Task[]>(this.apiUrl) //('./assets/data/data.json');
  }

  //obtenerDatosEdu():Observable<Educacion[]>{
  //  const url = "http://localhost:5001/data"
  //  return this.http.get<Educacion[]>(url) //('./assets/data/data.json');
 // }

  deleteEducacion(educacion: Educacion):Observable<Educacion>{
   // const id = typeof educacion === 'number' ? educacion : educacion.id;
    const url = `${this.apiUrl}/${educacion.id}`;
    console.log(url);
    return this.http.delete<Educacion>(url)
  }
   
  deleteExperiencia(experiencia: Experiencia):Observable<Experiencia>{
    // const id = typeof educacion === 'number' ? educacion : educacion.id;
     const url = `${this.apiUrl}/${experiencia.id}`;
     console.log(url);
     return this.http.delete<Experiencia>(url)
   }  

   deleteAptitud(aptitud: aptitud):Observable<aptitud>{
    // const id = typeof educacion === 'number' ? educacion : educacion.id;
     const url = `${this.apiUrl}/${aptitud.id}`;
     console.log(url);
     return this.http.delete<aptitud>(url)
   } 

   deleteLogro(logro: logro):Observable<logro>{
    // const id = typeof educacion === 'number' ? educacion : educacion.id;
     const url = `${this.apiUrl}/${logro.id}`;
     console.log(url);
     return this.http.delete<logro>(url)
   }     
}

