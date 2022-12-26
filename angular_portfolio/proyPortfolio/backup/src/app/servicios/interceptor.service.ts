import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private autServicio:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> 
  {
   // var currentUser=this.autServicio.usuarioAutenticado;
    //if (currentUser && currentUser.accesToken){
    //  req=req.clone({
    //    setHeaders:{
    //      Authorization: 'Bearer ${currentUser.accesToken}'
    //    }
    //  })
   // }
   req = req.clone({
    withCredentials: true,
  });
   //console.log("Interceptor esta corriendo" + JSON.stringify(currentUser));
    return next.handle(req);
  }
}

export const httpInterceptorProviders = [
  { useClass: InterceptorService, multi: true },
];
