import { Component } from '@angular/core';
import { subscribeOn, Subscription } from 'rxjs';
import { UiService} from 'src/app/services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-primerp-app';
  showAddPersona: boolean = false
  subscription?: Subscription

  constructor(private uiService:UiService, private router:Router){
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddPersona = value)
  }

  ngOninit():void{}

  toggleAddPersona(){
    this.uiService.toggleAddPersona();
  }

  hasRoute(route:string){
    return this.router.url === route
  }
}
