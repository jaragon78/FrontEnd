import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';
import { StorageService } from './storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AUTH_API = 'https://yoprogramo-jaragon78.koyeb.app/api/auth/';
//  currentUserSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient, private storageService: StorageService) {
    console.log("El servicio de autenticacion esta corriendo");
 //   this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      this.AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register( nombre: string, apellido: string, username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      this.AUTH_API + 'signup',
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
  //  localStorage.removeItem(window.sessionStorage.getItem(USER_KEY));
    window.sessionStorage.clear();  
    //window.sessionStorage.removeItem;
    return this.http.post(this.AUTH_API + 'signout',{});
  }

  get usuarioAutenticado(){
    return this.storageService.getUser();
  }
}
