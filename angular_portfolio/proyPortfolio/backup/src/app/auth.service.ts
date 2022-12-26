import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url =  'http://localhost:8080/api/auth/login'; //'https://localhost:4200';"
  currentUserSubject: BehaviorSubject<any>;
  //token: any; 
  AUTH_API = 'http://localhost:8080/api/auth/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private ruta: Router) { 
    console.log("El servicio de autenticacion esta corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }

  /*
  login(email: string, password:string){
    this.http.post (this.url + '/authenticate', {email: email, password: password}).subscribe((resp:any) => {
      this.router.navigate(['profile']);
      localStorage.setItem('auth_token', resp.tocken);
    })
  };


  logout(){
    localStorage.removeItem('token');
  }

  //public get logIn(): boolean{
  //  return (localStorage.getItem('token') !== null);
 // }
*/
  iniciarSesion(credenciales:any):Observable<any>
  {
  //  const user = {email: credenciales.email, password: credenciales.password};
  //  this.http.post ('http://localhost:8080/user',user).subscribe((resp:any) => {
  //  //  this.ruta.navigate(['profile']);
  //    localStorage.setItem('auth_token', resp.tocken);
  //  })
  var cors = require('cors');
   //   cors.use(cors());

    let parametros = new HttpParams();
   // parametros = parametros.append('grant_type','----');
  //  parametros = parametros.append('scope','')

    const params = new HttpParams().set("email", credenciales.email)
                                   .set("password",credenciales.password);
    
    const opciones = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_TOKEN_HERE' 
      }),
      params: params
    };
    console.log(params)
    var headers = new Headers();
    headers.append('Authorization', 'Bearer AADDFFKKKLLLL');

    //return this.http.get('http://localhost:8080/api/user',{params})

    //opciones.headers.set('Authorization', 'Bearer YOUR_TOKEN_HERE' + credenciales.token)
    console.log(credenciales)
   
   
   return this.http.post("http://localhost:8080/api/user",{params},
   {headers : new HttpHeaders({'Authorization' : 'Bearer ${currentUser.accesToken}'})}).pipe(map(data=>{
    return data;
  }))
   
  // return this.http.post('http://localhost:8080/api/user',{params},
  //  {headers : new HttpHeaders({'Authorization' : 'Bearer ${currentUser.accesToken}'})}).pipe(map(data=>{
  //   sessionStorage.setItem('currentUser', JSON.stringify(data));
  //   this.currentUserSubject.next(data);
  //    return data;
  //  }));
 
   //  this.http.post ('http://localhost:8080/api/user',{params},{headers:headers}).subscribe((resp:any) => {
   //     //this.router.navigate(['profile']);
   //     localStorage.setItem('auth_token', resp.token);
   //     return data;
 
  }

  authCerrarSesion(){
    localStorage.removeItem('currentUser');
  //  localStorage.clear;
  //  sessionStorage.clear;
  //  sessionStorage.removeItem('currentUser');
  //  this.currentUser.closed;
  }

  get usuarioAutenticado(){
    return this.currentUserSubject.value
  }

  //register(user: any): Observable<any> {
  // return this.http.post("http://localhost:8080/api/auth/register", user);
 // }
  

 // constructor(private http: HttpClient) {}



  login(username: string, password: string): Observable<any> {
    return this.http.post(
      this.AUTH_API + 'signin',
      {
        username,
        password,
      },
      this.httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      this.AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      this.httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(this.AUTH_API + 'signout', { }, this.httpOptions);
  }
  
}

