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

  educacionList: Educacion[] = []
  experienciaList: Experiencia[] = []
  aptitudList: aptitud[] = []  
  logroList: logro[] = []    

  API_URL = 'https://yoprogramo-jaragon78.koyeb.app/api/test/'; 
  private apiUrl = 'https://yoprogramo-jaragon78.koyeb.app'; 
 // courrentUserSubject: BehaviorSubject<any>;
  //token: any; 

  constructor(private http:HttpClient, private autServicio:AuthService) { 

   // this.courrentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }
  
  /* Obtengo lista de usuario registrados*/
  obtenerListaUser():Observable<any>{
    return this.http.get<any>(this.apiUrl+"/ver/listaUser")
   }

  /* Obtengo perfil de un usuario  registrados*/
  verPerfil(username:any):Observable<any>{
  console.log ( JSON.stringify(this.apiUrl+"/get/username/"+ username));
   return this.http.get<any>(this.apiUrl+"/get/username/"+ username)
  }

  /* Valida si existe usuario*/  
  existeUsr(email:string):Observable<any>{
    var currentUser=this.autServicio.usuarioAutenticado
   console.log("leyendo datos de portfolio service" );
   return this.http.get<any>(this.apiUrl+"/get/existeUser/"+ email)
  }

  /* Obtengo los datos de la persona logueada*/
  obtenerDatos():Observable<any>{
    var currentUser=this.autServicio.usuarioAutenticado
   console.log(currentUser.id);
   return this.http.get<any>(this.apiUrl+"/get/persona/"+ currentUser.id)
  }

  /* Guardo cambios de la persona*/  
  public guardarPersona(persona: Persona): Observable<any>{
    const headers = { 'content-type': 'application/json'} ;
    const url = `${this.apiUrl+"/put/persona"}`;
    const body = JSON.stringify(persona);
    console.log(url)
    console.log(JSON.stringify(persona))
    return this.http.put<any>(url,body,{'headers':headers});
   
  }

  /* CRUD Educacion usuario registrado*/
  obtenerEdu():Observable<any>{
    var currentUser=this.autServicio.usuarioAutenticado
   console.log("leyendo datos de portfolio service" );
   return this.http.get<any>(this.apiUrl+"/ver/listaEducacion/"+ currentUser.id)
  }

  public agregarEducacion(educacion: Educacion): Observable<any>{
       const headers = { 'content-type': 'application/json'} ;
       const url = `${this.apiUrl+"/new/educacion"}`;
       const body = JSON.stringify(educacion);
       console.log(url)
       console.log(JSON.stringify(educacion))
       return this.http.post<any>(url,body,{'headers':headers});
   }
 
  public guardarEducacion(educacion: Educacion): Observable<any>{
       const headers = { 'content-type': 'application/json'} ;
       const url = `${this.apiUrl+"/put/educacion"}`;
       const body = JSON.stringify(educacion);
       console.log(url)
       console.log(JSON.stringify(educacion))
       return this.http.put<any>(url,body,{'headers':headers});
   }
   
    
  deleteEducacion(id:number):Observable<any>{
    const url = `${this.apiUrl+"/deleteEdu"}/${id}`;
    console.log(url);
    return this.http.delete<Educacion>(url);
  }
 

  obtenerExp():Observable<any>{
    var currentUser=this.autServicio.usuarioAutenticado
   console.log("leyendo datos de portfolio service" );
   return this.http.get<any>(this.apiUrl+"/ver/listaExpLaboral/"+ currentUser.id)
  }

  /* CRUD Experiencia usuario registrado*/
  public agregarExperiencia(experiencia: Experiencia): Observable<any>{
    const headers = { 'content-type': 'application/json'} ;
    const url = `${this.apiUrl+"/new/expLaboral"}`;
    const body = JSON.stringify(experiencia);
    console.log(url)
    console.log(JSON.stringify(experiencia))
    return this.http.post<any>(url,body,{'headers':headers});
   
  }
  
  public guardarExperiencia(experiencia: Experiencia): Observable<any>{
    const headers = { 'content-type': 'application/json'} ;
    const url = `${this.apiUrl+"/put/expLaboral"}`;
    const body = JSON.stringify(experiencia);
    console.log(url)
    console.log(JSON.stringify(experiencia))
    return this.http.put<any>(url,body,{'headers':headers});
   
  }
   
  deleteExperiencia(id:number):Observable<any>{
     const url = `${this.apiUrl+"/deleteExp"}/${id}`;
     console.log(url);
     return this.http.delete<Experiencia>(url)
   }

  /* CRUD Aptitud usuario registrado*/  
  obtenerApt():Observable<any>{
    var currentUser=this.autServicio.usuarioAutenticado
   console.log("leyendo datos de portfolio service" );
   return this.http.get<any>(this.apiUrl+"/ver/listaTecnologias/"+ currentUser.id)
  }

  public agregarAptitud(aptitud: aptitud): Observable<any>{
    const headers = { 'content-type': 'application/json'} ;
    const url = `${this.apiUrl+"/new/tecnologia"}`;
    const body = JSON.stringify(aptitud);
    console.log(url)
    console.log(JSON.stringify(aptitud))
    return this.http.post(url,body,{'headers':headers});
   
  }

  public guardarAptitud(aptitud: aptitud): Observable<any>{
    const headers = { 'content-type': 'application/json'} ;
    const url = `${this.apiUrl+"/put/tecnologia"}`;
    const body = JSON.stringify(aptitud);
    console.log(url)
    console.log(JSON.stringify(aptitud))
    return this.http.put(url,body,{'headers':headers});
   
  }

   deleteAptitud(id:number):Observable<any>{
     const url = `${this.apiUrl+"/deleteTecno"}/${id}`;
     console.log(url);
     return this.http.delete<aptitud>(url)
   } 

  /* CRUD Logros usuario registrado*/
  obtenerLog():Observable<any>{
    var currentUser=this.autServicio.usuarioAutenticado
   console.log("leyendo datos de portfolio service" );
   return this.http.get<any>(this.apiUrl+"/ver/listaProyecto/"+ currentUser.id)
  }

  public agregarLogro(logro: logro): Observable<any>{
    const headers = { 'content-type': 'application/json'} ;
    const url = `${this.apiUrl+"/new/proyecto"}`;
    const body = JSON.stringify(logro);
    console.log(url)
    console.log(JSON.stringify(logro))
    return this.http.post<any>(url,body,{'headers':headers});
   
  }

  public guardarLogro(logro: logro): Observable<any>{
    const headers = { 'content-type': 'application/json'} ;
    const url = `${this.apiUrl+"/put/proyecto"}`;
    const body = JSON.stringify(logro);
    console.log(url)
    console.log(JSON.stringify(logro))
    return this.http.put<any>(url,body,{'headers':headers});
   
  }
  
   deleteLogro(id:number):Observable<any>{
     const url = `${this.apiUrl+"/deleteProy"}/${id}`;
     console.log(url);
     return this.http.delete<logro>(url)
   }  

  /* Get para saber el role de usuario*/
  getPublicContent(): Observable<any> {
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

