import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/Persona';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  persona: Persona;
  username:any;

  constructor(private userService: PortfolioService) { 
    this.persona = new Persona();
  }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
        console.log ("Encabezado");    
       },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });

    
  }
}
