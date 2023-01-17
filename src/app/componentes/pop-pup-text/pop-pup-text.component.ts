import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop-pup-text',
  templateUrl: './pop-pup-text.component.html',
  styleUrls: ['./pop-pup-text.component.css']
})
export class PopPupTextComponent implements OnInit {


  constructor(private modal: NgbModal) {}
  
  ngOnInit(): void {}
 
  openSM(contenido:any){
    this.modal.open(contenido,{size:'sm'})
  }
  
}

