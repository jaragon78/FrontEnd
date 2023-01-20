import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';
import { StorageService } from './storage.service';

const AUTH_API = 'https://yoprogramo-jaragon78.koyeb.app/api/auth/'; // 'http://localhost:8080/api/auth/'; //

const httpOptions = {
//  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
  headers: new HttpHeaders({ 'Content-Type': 'application/json',responseType: 'text' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
//  currentUserSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient, private storageService: StorageService) {
    console.log("El servicio de autenticacion esta corriendo");
 //   this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register( nombre: string, apellido: string, username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        nombre,
        apellido,
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout',{ }, httpOptions);
  }

  get usuarioAutenticado(){
    return this.storageService.getUser();
  }
}
