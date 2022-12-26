import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  
  constructor(private authService: AuthService, private rutas:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let currentUser=this.authService.usuarioAutenticado;
    console.log("GUARD", currentUser);
    if (currentUser) //&& currentUser.getCurrentUser)
    {
      console.log("Autorizado");
      return true;
    }else{
      console.log("ERROR");
      this.rutas.navigate(['/home']);
      return false;
    }
  }
  
}
