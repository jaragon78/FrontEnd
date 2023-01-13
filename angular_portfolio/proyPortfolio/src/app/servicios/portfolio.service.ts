import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { aptitud } from '../models/aptitud';
import { Educacion } from '../models/Educacion';
import { Experiencia } from '../models/Experiencia';
import { logro } from '../models/logro';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
import { Persona } from '../models/Persona';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
//  private apiUrl = "http://localhost:5001/data"
  educacionList: Educacion[] = []
  experienciaList: Experiencia[] = []
  aptitudList: aptitud[] = []  
  logroList: logro[] = []    
  API_URL =  'http://localhost:8080/api/test/'; //'https://yoprogramo-jaragon78.koyeb.app/api/test/'; //

  private apiUrl = 'http://localhost:8080'; // 'https://yoprogramo-jaragon78.koyeb.app'; //
 // courrentUserSubject: BehaviorSubject<any>;
  //token: any; 

  constructor(private http:HttpClient, private autServicio:AuthService) { 

   // this.courrentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }

  obtenerDatos():Observable<any>{
    var currentUser=this.autServicio.usuarioAutenticado
    //return this.http.get<Task[]>(this.apiUrl); //('./assets/data/data.json');
   console.log(currentUser.id);
   //return this.http.get<any>(this.apiUrl+"get/personas")
   return this.http.get<any>(this.apiUrl+"/get/persona/"+ currentUser.id)
   //return this.http.get(this.apiUrl);
  }

  verPerfil(username:any):Observable<any>{
  console.log ( JSON.stringify(this.apiUrl+"/get/username/"+ username));
   return this.http.get<any>(this.apiUrl+"/get/username/"+ username)
  }

  obtenerListaUser():Observable<any>{
   return this.http.get<any>(this.apiUrl+"/ver/listaUser")
  }

  obtenerEdu():Observable<any>{
    var currentUser=this.autServicio.usuarioAutenticado
   console.log("leyendo datos de portfolio service" );
   return this.http.get<any>(this.apiUrl+"/ver/listaEducacion/"+ currentUser.id)
  }

  obtenerExp():Observable<any>{
    var currentUser=this.autServicio.usuarioAutenticado
   console.log("leyendo datos de portfolio service" );
   return this.http.get<any>(this.apiUrl+"/ver/listaExpLaboral/"+ currentUser.id)
  }

  obtenerApt():Observable<any>{
    var currentUser=this.autServicio.usuarioAutenticado
   console.log("leyendo datos de portfolio service" );
   return this.http.get<any>(this.apiUrl+"/ver/listaTecnologias/"+ currentUser.id)
  }

  obtenerLog():Observable<any>{
    var currentUser=this.autServicio.usuarioAutenticado
   console.log("leyendo datos de portfolio service" );
   return this.http.get<any>(this.apiUrl+"/ver/listaProyecto/"+ currentUser.id)
  }

  existeUsr(email:string):Observable<any>{
    var currentUser=this.autServicio.usuarioAutenticado
   console.log("leyendo datos de portfolio service" );
   return this.http.get<any>(this.apiUrl+"/get/existeUser/"+ email)
   //return this.http.get<any>("http://localhost:8080/get/existeUser/"+ email)
  }

  //public guardarAcercaDe(persona: Persona): Observable<any>{
  //  const url = `${this.apiUrl+"/put/persona"}/${persona}`;
  //  return this.http.put(url,JSON.stringify(persona));
 // }

  public guardarPersona(persona: any): Observable<any>{
    const headers = {'Access-Control-Allow-Origin': '*'} ;
    const url = `${this.apiUrl+"/new/persona"}`;
    const body = JSON.stringify(persona);
    console.log(url)
    console.log(JSON.stringify(persona))
    return this.http.post(url,body,{'headers':headers});
    //return this.http.post("http://localhost:8080/new/educacion", body,{'headers':headers});
   
  }

  public guardarEducacion(educacion: any): Observable<any>{
    const headers = {'Access-Control-Allow-Origin': '*'} ;
    const url = `${this.apiUrl+"/new/educacion"}`;
    const body = JSON.stringify(educacion);
    console.log(url)
    console.log(JSON.stringify(educacion))
    return this.http.post(url,body,{'headers':headers});
    //return this.http.post("http://localhost:8080/new/educacion", body,{'headers':headers});
   
  }

  public guardarExperiencia(experiencia: any): Observable<any>{
    const headers = {'Access-Control-Allow-Origin': '*'} ;
    const url = `${this.apiUrl+"/new/expLaboral"}`;
    const body = JSON.stringify(experiencia);
    console.log(url)
    console.log(JSON.stringify(experiencia))
    return this.http.post(url,body,{'headers':headers});
   
  }

  public guardarAptitud(aptitud: any): Observable<any>{
    const headers = {'Access-Control-Allow-Origin': '*'} ;
    const url = `${this.apiUrl+"/new/tecnologia"}`;
    const body = JSON.stringify(aptitud);
    console.log(url)
    console.log(JSON.stringify(aptitud))
    return this.http.post(url,body,{'headers':headers});
   
  }

  public guardarLogro(logro: any): Observable<any>{
    const headers = {'Access-Control-Allow-Origin': '*'} ;
    const url = `${this.apiUrl+"/new/proyecto"}`;
    const body = JSON.stringify(logro);
    console.log(url)
    console.log(JSON.stringify(logro))
    return this.http.post(url,body,{'headers':headers});
   
  }

  deleteEducacion(id:number):Observable<any>{
   // const id = typeof educacion === 'number' ? educacion : educacion.id;
    const url = `${this.apiUrl+"/deleteEdu"}/${id}`;
    console.log(url);
    return this.http.delete<Educacion>(url);
  }
   
  deleteExperiencia(id:number):Observable<any>{
    // const id = typeof educacion === 'number' ? educacion : educacion.id;
     const url = `${this.apiUrl+"/deleteExp"}/${id}`;
     console.log(url);
     return this.http.delete<Experiencia>(url)
   }  

   deleteAptitud(id:number):Observable<any>{
    // const id = typeof educacion === 'number' ? educacion : educacion.id;
     const url = `${this.apiUrl+"/deleteTecno"}/${id}`;
     console.log(url);
     return this.http.delete<aptitud>(url)
   } 

   deleteLogro(id:number):Observable<any>{
    // const id = typeof educacion === 'number' ? educacion : educacion.id;
     const url = `${this.apiUrl+"/deleteProy"}/${id}`;
     console.log(url);
     return this.http.delete<logro>(url)
   }   
   
   getPublicContent(): Observable<any> {
    console.log("leyendo datos de portfolio service" );
    return this.http.get(this.API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'user', { responseType: 'text' });
  }
  
  getModeratorBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'admin', { responseType: 'text' });
  }   
}

