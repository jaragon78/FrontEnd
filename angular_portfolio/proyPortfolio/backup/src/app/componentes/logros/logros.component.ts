import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { InvokeFunctionExpr } from '@angular/compiler';
import { logro } from 'src/app/models/logro';
import { FormArray, FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {
  logrosList:logro[] = [];
  form:FormGroup;
  form2:FormGroup;
  id_per: number;
  @Input() logro: logro = new logro()
  @Output() deleteItem:EventEmitter<logro> = new EventEmitter

  constructor(private datosPortfolio:PortfolioService,  private formBuilder:FormBuilder,
              private modal: NgbModal, private modal2: NgbModal) {
    this.form = this.formBuilder.group({
      id_proy:[0],
      nombre:[''],
      descripcion:[''],
      comentario:[''],
      personaId:[0],
    });

    this.form2 = this.formBuilder.group({
      id_proy:[0],
      nombre:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      comentario:[''],
      personaId:[0],
    });    
    this.id_per = 0;
  }

  ngOnInit(): void {
   // this.datosPortfolio.obtenerDatos().subscribe(data =>{
//      console.log(data);
    //  this.logrosList = data.project;    
   // })  
    this.datosPortfolio.obtenerLog().subscribe(data =>{
    console.log ("Proyectos" + JSON.stringify(data));
    this.logrosList = data;     
    //this.id_per = data.personaId;   
    })
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log ("Datos Personales" + JSON.stringify(data));
      this.id_per = data.id_per;
    })

  }

  borrarItem(logro: logro){     
   // this.deleteItem.emit(logro);
    this.borrarProyLista(logro);
    window.location.reload();
  }

  borrarProyLista(logro: logro){
   // aca tengo que llamar al service para actualizar la base de datos, mientras tanto actualizo la lista 
   console.log(JSON.stringify(logro.id_proy));
   this.datosPortfolio.deleteLogro(logro.id_proy).subscribe((response: any) => {
     console.log(response);});
  }

 // get formLogros(){
  //  return this.form.get('formLogros') as FormArray;
 // }

  //addFormLogros(){
  //  this.formLogros.push(this.formBuilder.control(''));
 // }

  openPopPup(logro:logro,contenido:any){
    console.log(JSON.stringify(logro))
     
    this.form.controls['id_proy'].setValue(logro.id_proy);
    this.form.controls['nombre'].setValue(logro.nombre);
    this.form.controls['descripcion'].setValue(logro.descripcion);
    this.form.controls['comentario'].setValue(logro.comentario);
    this.form.controls['personaId'].setValue(logro.personaId);

    this.modal.open(contenido,{size:'xl'})
    
  }

  agregarItem(contenido2:any){

    this.form2.controls['nombre'].setValue("");
    this.form2.controls['descripcion'].setValue("");
    this.form2.controls['comentario'].setValue("");
    this.modal2.open(contenido2,{size:'xl'})
  }
  
  guardarCambios(logro:logro){
    this.form.controls['personaId'].setValue(this.id_per);
    this.datosPortfolio.guardarLogro(this.form.value).subscribe((response: any) => {
      console.log(response);});
    console.log(JSON.stringify(this.form.value));
  
    this.modal.dismissAll();
    window.location.reload();
    
  }

  agregarLogro(event:Event){
    this.form2.controls['personaId'].setValue(this.id_per);
    console.log(this.form2.value)
    this.datosPortfolio.guardarLogro(this.form2.value).subscribe((response: any) => {
      console.log(response);});
    console.log(JSON.stringify(this.form2.value));
  
    this.modal2.dismissAll();
    window.location.reload();
  }    
}
