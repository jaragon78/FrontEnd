export class Persona{
    id: number
    nombre:string
    apellido:string
    edad: number


    constructor(id:number = 0, nombre:string = " ", apellido: string = " ",  edad:number = 0){
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

 //   cumplirAnios(){
 //       this.edad++
 //   }
}