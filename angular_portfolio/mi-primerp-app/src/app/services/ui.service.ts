import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {HttpClient, HttpHandler} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddPersona: boolean = false;
  private subjet =  new Subject<any>();

  constructor() { }

  toggleAddPersona():void{
    this.showAddPersona = !this.showAddPersona
    this.subjet.next(this.showAddPersona)
  }

  onToggle():Observable<any>{
    return this.subjet.asObservable();
  }
}
